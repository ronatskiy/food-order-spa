import { observable, runInAction } from "mobx";

import MenuService from "../services/menu-service";
import DayMenu, { DayMenuDto } from "../entities/day-menu";
import OrderService from "../services/order-service";
import Day from "../entities/day";
import AppViewModel from "./app";
import { UserOrder } from "../entities/types";
import transformToUsersOrders from "../pages/home/transformators/transform-to-users-orders";

class OrderModel {
	constructor(private menuService: MenuService, private orderService: OrderService, private appModel: AppViewModel) {}

	@observable
	public nextWeekMenu: DayMenu[] = [];
	@observable
	public todayOrders: UserOrder[] = [];
	@observable
	public sharedTodayOrders: UserOrder[] = [];
	@observable
	public myOrders: UserOrder[] = [];

	public orderLunch = async (userOrder: UserOrder) => {
		return this.orderService.orderLunch(userOrder);
	};

	public async fetchWeekMenu() {
		try {
			const weekMenuData = await this.menuService.getWeekMenu();
			const weekMenu = weekMenuData.map((wmd: DayMenuDto) => {
				const day = this.appModel.calendar.getDay(wmd.shortDate) || new Day(wmd.shortDate);
				return new DayMenu(day, wmd.suppliers);
			});

			runInAction(() => {
				this.nextWeekMenu = weekMenu;
			});
		} catch (e) {
			console.log(e.message);
		}
	}

	public async fetchTodayOrders() {
		try {
			let todayOrders = await this.orderService.getTodayOrders();

			runInAction(() => {
				this.todayOrders = todayOrders;
			});
		} catch (e) {
			console.error(e.message);
		}
	}

	public async fetchSharedTodayOrders() {
		try {
			let sharedTodayOrdersData = await this.orderService.getSharedTodayOrders();

			runInAction(() => {
				this.sharedTodayOrders = transformToUsersOrders(sharedTodayOrdersData);
			});
		} catch (e) {
			console.error(e.message);
		}
	}

	public async fetchMyOrders(userId: string | null) {
		try {
			let myOrders = await this.orderService.getWeekOrders(userId);

			runInAction(() => {
				this.myOrders = myOrders;
			});
		} catch (e) {
			console.error(e.message);
		}
	}
}

export default OrderModel;