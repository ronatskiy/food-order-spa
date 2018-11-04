import Supplier from "./supplier";

class DayMenu {
	constructor({ suppliers, weekDay, weekDayDate = "", isHoliday = false, orderedDishes = [] }) {
		this.day = {
			shortName: weekDay,
			date: weekDayDate,
			isHoliday: isHoliday,
		};
		this.suppliers = suppliers.map(supplier => new Supplier(supplier));
		this.orderedDishes = orderedDishes;
	}
}

export default DayMenu;
