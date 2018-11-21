import axios from "axios";
import DayMenu from "../../entities/day-menu";

export default class MenuService {
	private api: string;

	constructor(api: string) {
		this.api = `${api}/menu/week-menu/`;
	}

	public async getWeekMenu() {
		const menu = (await axios.get(this.api)).data;

		return menu.map((wd: any) => new DayMenu(wd));
	}
}