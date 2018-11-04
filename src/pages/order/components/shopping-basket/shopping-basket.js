import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

import Dish from "../../../../entities/dish";
import DishSelector from "../dish-view/dish-selector";
import ShoppingCart from "../../../../components/logos/shopping-cart";
import "./shopping-basket.scss";

class ShoppingBasket extends React.Component {
	static propTypes = {
		availableMoneyToOrder: PropTypes.number,
		dishes: PropTypes.arrayOf(PropTypes.instanceOf(Dish)).isRequired,
		onUnselectDish: PropTypes.func.isRequired,
		onMakeOrder: PropTypes.func.isRequired,
	};

	static defaultProps = {
		availableMoneyToOrder: 51,
	};

	get _payment() {
		return this.props.dishes.reduce((acc, dish) => acc + dish.price, 0);
	}

	get _overpayment() {
		const overpayment = this._payment - this.props.availableMoneyToOrder;

		return overpayment > 0 ? overpayment : 0;
	}

	render() {
		const { dishes, onUnselectDish, onMakeOrder } = this.props;

		return (
			<div className="shopping-basket border">
				<h3 className="shopping-basket__title text-center">Сумма заказа</h3>
				<div className="shopping-basket__payment text-center">
					<div className="shopping-basket__payment-value">
						<span>{this._payment}</span>
						<span className="shopping-basket__payment-money-unit">грн</span>
					</div>
					{this._overpayment > 0 && (
						<div className="overpayment text-danger">
							<span className="overpayment__title">Переплата</span>
							{this._overpayment}
							<span className="overpayment__money-unit">грн</span>
						</div>
					)}
				</div>
				<div className="shopping-basket__dishes">
					{dishes.map(dish => {
						return <DishSelector key={dish.id} isSelected dish={dish} onUnselect={onUnselectDish} />;
					})}
				</div>
				{dishes.length > 0 && (
					<div className="text-right">
						<Button className="shopping-basket__order-button" color="primary" onClick={onMakeOrder}>
							Заказать
							<ShoppingCart className="shopping-basket__order-button-icon" />
						</Button>
					</div>
				)}
			</div>
		);
	}
}

export default ShoppingBasket;
