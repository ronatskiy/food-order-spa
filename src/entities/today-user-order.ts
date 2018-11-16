import Supplier from "./supplier";

class TodayUserOrder {
	public dayName: string;
	public userName: string;
	public suppliers: Supplier[];

	constructor(dayName: string, userName: string, suppliers: any[]) {
		this.dayName = dayName;
		this.userName = userName;
		this.suppliers = suppliers.map(supplier => new Supplier(supplier));
	}
}

export default TodayUserOrder;
