import User from "../../../entities/user";
import Day from "../../../entities/day";
import TodayUserOrder from "../../../entities/today-user-order";

function transformToUsersOrders(todayOrders: TodayUserOrder[]) {
	if (!todayOrders) {
		return [];
	}

	return todayOrders.map(({ userName, dayName, suppliers }) => {
		const [firstSupplier] = suppliers; //IMPORTANT!!! The system must allow order only single supplier's food
		const { name, allDishes } = firstSupplier;

		return {
			day: new Day(dayName),
			user: new User(userName),
			order: {
				supplierName: name,
				dishes: allDishes,
			},
		};
	});
}

export default transformToUsersOrders;
