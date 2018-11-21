import User from "../../../entities/user";
import Day from "../../../entities/day";

/**
 *
 * @param todayOrders
 * @return {UserOrder[]}
 */
function transformToUsersOrders(todayOrders) {
	if (!todayOrders) {
		return [];
	}

	return todayOrders.map(({ userName, userId, dayName, suppliers }) => {
		const [firstSupplier] = suppliers; //IMPORTANT!!! The system must allow order only single supplier's food
		const { supplierId, supplierName, allDishes } = firstSupplier;

		return {
			day: new Day({ shortName: dayName }),
			user: new User(userName, userId),
			order: {
				supplierId,
				supplierName,
				dishes: allDishes,
			},
		};
	});
}

export default transformToUsersOrders;
