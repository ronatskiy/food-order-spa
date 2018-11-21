import { action, observable, runInAction } from "mobx";
import RootStore from "../../../store/root-store";
import MenuService from "../../../services/menu-service";
import DayMenu from "../../../entities/day-menu";
import OrderService from "../../../services/order-service";
import { Order } from "../../../entities/types";
import Day from "../../../entities/day";

class OrderPageStore {
	constructor(private rootStore: RootStore, private menuService: MenuService, private orderService: OrderService ) {
		this.fetchAllData();
	}

	@observable
	public weekMenu: DayMenu[] = [];
	@observable
	public selectedDay: string = "";

	@action.bound
	public switchDay = (dayName: string) => {
		if (this.selectedDay !== dayName) {

			this.selectedDay = dayName;
		}
	};

	public orderLunch = async (day: Day, order: Order) => {
		if(!this.rootStore.identity.isAuthenticated) {
			throw new Error("User must be authenticated to perform this operation");
		}

		try {
			const user = this.rootStore.identity.currentUser!;
			const makeOrder = () => this.orderService.orderLunch({
				day,
				user,
				order,
			});

			await this.rootStore.operationManager.runWithProgress(makeOrder);
			return;
		} catch (e) {
			console.error(e.message);
		}
	};


	private async fetchAllData() {
		try {
			const weekMenu: DayMenu[] = await this.menuService.getWeekMenu();
			const [dayMenu] = weekMenu;

			runInAction(() => {
				this.weekMenu = weekMenu;
			});

			// TODO: Use day instead of shortName
			this.switchDay(dayMenu.day.shortName);
		} catch (e) {
			console.log(e.message);
		}
	}
}

export default OrderPageStore;