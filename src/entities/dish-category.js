import Dish from "./dish";

class DishCategory {
	constructor({ id, name, dishes, canMultiSelect = false }) {
		this.id = id;
		this.name = name;
		this.canMultiSelect = canMultiSelect;
		this.dishes = dishes.map(dish => new Dish(dish));
	}
}

export default DishCategory;
