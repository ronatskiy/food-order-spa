import { observable, runInAction, action } from "mobx";

import OrderService from "../../../services/order-service";
import { RootStore } from "../../../store";
import { UserOrder } from "../../../entities/types";
import transformToUsersOrders from "../transformators/transform-to-users-orders";
import PageStore from "../../../store/page-store";

class HomePageStore extends PageStore {
	constructor(rootStore: RootStore, private orderService: OrderService) {
		super(rootStore);

		this.fetchAllData();
	}

	@observable
	public todayOrders: UserOrder[] = [];
	@observable
	public sharedTodayOrders: UserOrder[] = [];

	@action.bound
	private async fetchAllData() {
		try {
			let todayOrders = await this.fetchTodayOrders();
			let sharedTodayOrdersData = await this.fetchSharedTodayOrders();

			runInAction(() => {
				this.todayOrders = todayOrders;
				this.sharedTodayOrders = transformToUsersOrders(sharedTodayOrdersData);
			});
		} catch (e) {
			console.error(e.message);
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
