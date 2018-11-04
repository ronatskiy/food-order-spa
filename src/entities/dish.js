class Dish {
	constructor({ id, name, price, negativeRewievs, positiveRewievs }) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.rating = positiveRewievs - negativeRewievs;
	}
}

export default Dish;
