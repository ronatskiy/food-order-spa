import React from "react";
import PropTypes from "prop-types";

import Dish from "../../../../entities/dish";
import Add from "../../../../components/logos/add";
import Cancel from "../../../../components/logos/cancel";
import "./dish-selector.scss";

class DishSelector extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		onSelect: PropTypes.func,
		onUnselect: PropTypes.func,
		isSelected: PropTypes.bool.isRequired,
		dish: PropTypes.instanceOf(Dish).isRequired,
	};

	static defaultProps = {
		onSelect() {},
		onUnselect() {},
	};

	_handleClick = () => {
		const { isSelected, dish, onSelect, onUnselect } = this.props;

		if (isSelected) {
			onUnselect(dish);
		} else {
			onSelect(dish);
		}
	};

	render() {
		const { className = "", dish, isSelected } = this.props;

		return (
			<div className={`dish-selector ${className}`}>
				<span className="dish-selector__name">{dish.name}</span>
				<span className="dish-selector__price">
					{dish.price && dish.price}
					<span className="dish-selector__money-unit">грн</span>
				</span>
				<button className="dish-selector__button" onClick={this._handleClick}>
					{isSelected ? (
						<Cancel className="dish-selector__icon dish-selector__icon--cancel" />
					) : (
						<Add className="dish-selector__icon dish-selector__icon--add" />
					)}
				</button>
			</div>
		);
	}
}

export default DishSelector;
