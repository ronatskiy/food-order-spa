import axios from "axios";
import TodayUserOrder from "../../entities/today-user-order";
import Dish from "../../entities/dish";

export default class OrderService {
	private api: string;

	constructor(api: string) {
		this.api = `${api}/order`;
	}

	public async getTodayOrders() {
		const orders = (await axios.get(`${this.api}/today-orders/`)).data;
		return orders.map((uo: any) => new TodayUserOrder(uo.weekDay, uo.userName, uo.suppliers));
	}

	public async getSharedTodayOrders() {
		const orders = (await axios.get(`${this.api}/shared-today-orders/`)).data;
		return orders.map((uo: any) => new TodayUserOrder(uo.weekDay, uo.userName, uo.suppliers));
	}

	public orderLunch(selectedDishes: Dish[]) {
		return axios.post(`${this.api}/order-lunch/`, selectedDishes);
	}
}