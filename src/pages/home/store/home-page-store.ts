import { observable, runInAction, action } from "mobx";

import OrderService from "../../../services/order-service";
import { RootStore } from "../../../store";
import { UserOrder } from "../../../entities/types";
import transformToUsersOrders from "../transformators/transform-to-users-orders";

class HomePageStore {
	constructor(private rootStore: RootStore, private orderService: OrderService) {
		this.fetchAllData();
	}

	@observable
	public todayOrders: UserOrder[] = [];
	@observable
	public sharedTodayOrders: UserOrder[] = [];

	@action.bound
	private async fetchAllData() {
		try {
			let todayOrdersData = await this.fetchTodayOrders();
			let sharedTodayOrdersData = await this.fetchSharedTodayOrders();

			runInAction(() => {
				this.todayOrders = transformToUsersOrders(todayOrdersData);
				this.sharedTodayOrders = transformToUsersOrders(sharedTodayOrdersData);
			});
		} catch (e) {
			console.log(e.message);
		}
	}

	private fetchTodayOrders() {
		return this.rootStore.operationManager.runWithProgress(() => this.orderService.getTodayOrders())
	}

	private fetchSharedTodayOrders() {
		return this.rootStore.operationManager.runWithProgress(() => this.orderService.getSharedTodayOrders())
	}
}

export default HomePageStore;
