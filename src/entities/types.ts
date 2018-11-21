import Dish from "./dish";
import User from "./user";
import Day from "./day";

export interface Order {
	supplierName: string;
	dishes: Dish[];
}

export interface UserOrder {
	user: User;
	day: Day;
	order: Order;
}
