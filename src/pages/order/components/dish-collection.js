import React from "react";
import PropTypes from "prop-types";

import Dish from "../../../entities/dish";
import DishSelector from "./dish-selector/dish-selector";

class DishCollection extends React.Component {
	static propTypes = {
		dishes: PropTypes.arrayOf(PropTypes.instanceOf(Dish)).isRequired,
		selectedDishes: PropTypes.arrayOf(PropTypes.instanceOf(Dish)).isRequired,
		canMultiSelect: PropTypes.bool,
		onSelect: PropTypes.func.isRequired,
		onUnselect: PropTypes.func.isRequired,
	};

	static defaultProps = {
		canMultiSelect: true,
	};

	get _onlySingleSelect() {
		return !this.props.canMultiSelect;
	}

	get _isSomeDishSelected() {
		return this.props.dishes.some(dish => this.props.selectedDishes.includes(dish));
	}

	_handleSelectDish = dish => {
		if (this._onlySingleSelect && this._isSomeDishSelected) {
			alert("Множественный выбор запрещен!!!");
			return;
		}

		this.props.onSelect(dish);
	};

	render() {
		const { dishes, selectedDishes, onUnselect } = this.props;

		return dishes.map(dish => {
			const isSelected = selectedDishes.some(({ id }) => id === dish.id);

			return (
				<DishSelector
					key={dish.id}
					dish={dish}
					isSelected={isSelected}
					disabled={this._onlySingleSelect && this._isSomeDishSelected && !isSelected}
					onSelect={this._handleSelectDish}
					onUnselect={onUnselect}
				/>
			);
		});
	}
}
export default DishCollection;
