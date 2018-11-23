import { action, computed, observable, runInAction } from "mobx";

import PageStore from "../../../store/page-store";
import OrderService from "../../../services/order-service";
import { RootStore } from "../../../store";
import { UserOrder } from "../../../entities/types";
import Day from "../../../entities/day";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default class WeekOrderPageStore extends PageStore {
	constructor(rootStore: RootStore, private orderService: OrderService) {
		super(rootStore);
	}

	@observable
	public orders: UserOrder[] = [];

	@computed
	public get days() {
		const days = this.orders.map(userOrder => userOrder.day);

		return WEEK_DAYS.reduce((acc: Day[], shortName: string) => {
			const day = days.find(d => d.shortName === shortName);

			return [...acc, day || new Day(shortName)];
		}, [])
	}

	@action
	public async fetchOrders() {
		const userId = this.rootStore.identity.isAuthenticated ?  this.rootStore.identity.currentUser!.id : null;
		const orders = await this.rootStore.operationManager.runWithProgress(() => this.orderService.getWeekOrders(userId));

		runInAction(() => {
			this.orders = orders;
		})
	}
}
