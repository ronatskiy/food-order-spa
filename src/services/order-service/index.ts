import axios from "axios";

import { UserOrder } from "../../entities/types";
import TodayUserOrder from "../../entities/today-user-order";

export default class OrderService {
	constructor(private readonly api: string) {
		this.api = `${api}/order`;
	}

	public async getTodayOrders(): Promise<UserOrder[]> {
		return (await axios.get(`${this.api}/today-orders/`)).data;
	}

	public async getSharedTodayOrders(): Promise<TodayUserOrder[]> {
		const orders = (await axios.get(`${this.api}/shared-today-orders/`)).data;
		return orders.map((uo: any) => new TodayUserOrder(uo.weekDay, uo.userName, uo.suppliers));
	}

	public orderLunch(userOrder: UserOrder) {
		return axios.post(`${this.api}/order-lunch/`, userOrder);
	}

	public async getWeekOrders(userId: string | null): Promise<UserOrder[]> {
		if (!userId) {
			return []
		}

		return (await axios.get(`${this.api}/week-orders/${userId}`)).data;
	}
}