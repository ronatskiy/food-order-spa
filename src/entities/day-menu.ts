import Supplier from "./supplier";
import Day from "./day";

interface DayMenuRawData {
 	suppliers:[];
	weekDay: any;
	weekDayDate: string;
	isHoliday: boolean;
	orderedDishes: [];
}

class DayMenu {
	public day: Day;
	public suppliers: Supplier[];
	public orderedDishes: [];

	constructor({ suppliers, weekDay, weekDayDate = "", isHoliday = false, orderedDishes = [] }: DayMenuRawData) {
		this.day = new Day(
			weekDay,
			weekDayDate,
			isHoliday,
		);
		this.suppliers = suppliers.map(supplier => new Supplier(supplier));
		this.orderedDishes = orderedDishes;
	}
}

export default DayMenu;
