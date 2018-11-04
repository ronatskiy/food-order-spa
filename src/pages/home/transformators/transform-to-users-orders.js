import Dish from "../../../entities/dish";

function transformToUsersOrders(todayOrders) {
	if (!todayOrders) {
		return [];
	}

	return todayOrders.map(({ userName, suppliers }) => {
		const [firstSupplier] = suppliers; //IMPORTANT!!! The system must allow order only single supplier's food
		const { supplierId, supplierName, categories } = firstSupplier;

		return {
			userName,
			order: {
				supplierId,
				supplierName,
				dishes: categories.reduce((acc, category) => {
					return [...acc, ...category.dishes.map(dish => new Dish(dish))];
				}, []),
			},
		};
	});
}

export default transformToUsersOrders;
