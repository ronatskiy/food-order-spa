import Dish from "./dish";
import User from "./user";
import Day from "./day";

export interface Order {
	supplierName: string;
	dishes: Dish[];
}

export interface UserOrder {
	day: Day;
	user: User;
	order: Order;
}
