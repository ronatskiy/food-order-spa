import React from "react";
import Dish from "../../../entities/dish";

import "./dish-view.scss";

interface Props {
	dish: Dish;
}

const DishView = ({ dish }: Props) => {
	return (
		<div className="dish-view px-2">
			<span className="dish-view__name">{dish.name}</span>
			{dish.price > 0 && (
				<span className="dish-view__price">
					<span className="dish-view__price-value">{dish.price}</span>
					<span className="dish-view__money-unit">грн</span>
				</span>
			)}
		</div>
	);
};

export default DishView;