import Dish from "./dish";

export interface UserOrder {
	userName: string;
	order: {
		supplierName: string;
		dishes: Dish[];
	};
}