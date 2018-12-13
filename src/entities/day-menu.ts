import Supplier from "./supplier";
import Day from "./day";

export interface DayMenuDto {
 	suppliers: [];
	shortDate: string;
}

class DayMenu {
	public weekDay: Day;
	public suppliers: Supplier[];

	constructor(day: Day, suppliers: []) {
		this.weekDay = day;
		this.suppliers = suppliers.map(supplier => new Supplier(supplier));
	}
}

export default DayMenu;
