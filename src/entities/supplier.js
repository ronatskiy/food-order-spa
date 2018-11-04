import DishCategory from "./dish-category";

class Supplier {
	constructor({ supplierId, supplierName, availableMoneyToOrder, canMultiSelect = true, categories }) {
		this.id = supplierId;
		this.name = supplierName;
		this.availableMoneyToOrder = availableMoneyToOrder;
		this.categories = categories.map(category => new DishCategory({ ...category, canMultiSelect }));
	}
}

export default Supplier;
