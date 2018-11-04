// import axios from "axios";

import FAKE_MENU from "./__mocks__/fake-menu";
import TODAY_ORDERS from "./__mocks__/fake-today-orders";
import SHARED_TODAY_ORDERS from "./__mocks__/fake-shared-today-orders";
import DayMenu from "../entities/day-menu";

export async function getWeekMenu() {
	//const menu = (await axios.get("/api/order/get-week-menu")).data;
	const menu = await new Promise(resolve => setTimeout(() => resolve(FAKE_MENU), 1000));
	const weekMenu = menu.weekDays.map(wd => new DayMenu(wd));

	return weekMenu;
}

export async function getTodayOrders() {
	return await new Promise(resolve => setTimeout(() => resolve(TODAY_ORDERS), 1000)); // (await axios.get("/api/order/get-week-menu")).data;
}

export async function getSharedTodayOrders() {
	return await new Promise(resolve => setTimeout(() => resolve(SHARED_TODAY_ORDERS), 1000)); // (await axios.get("/api/order/get-week-menu")).data;
}

export function orderLunch(ids) {
	/*return axios({
		method: "POST",
		url: "/api/order/post-order",
		data: ids.map(({ id }) => id),
	});*/

	return new Promise(resolve => setTimeout(() => resolve(), 1000));
}
