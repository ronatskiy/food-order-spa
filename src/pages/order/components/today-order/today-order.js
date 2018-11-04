import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Alert } from "reactstrap";

import DishSelector from "../dish-selector/dish-selector";
import ShoppingBasket from "../shopping-basket/shopping-basket";
import DayMenu from "../../../../entities/day-menu";
import RootContext from "../../../../store/root-context";
import Expander from "../../../../components/expander";
import "./today-order.scss";

export default class TodayOrder extends React.Component {
	static contextType = RootContext;
	static propTypes = {
		menu: PropTypes.instanceOf(DayMenu).isRequired,
	};

	state = {
		selectedDishes: [],
		isOrdered: false,
	};

	_getSelectedSupplier() {
		return this.props.menu.suppliers.find(supplier =>
			supplier.allDishes.some(dish => this.state.selectedDishes.includes(dish)),
		);
	}

	_handleOrder = async () => {
		try {
			await this.context.longOperation(() => this.context.webApi.orderLunch(this.state.selectedDishes || []));

			this.setState({ selectedDishes: [], isOrdered: true });
		} catch (e) {
			console.log(e.message);
		}
	};

	_handleSelectDish = dishToSelect => {
		const { selectedDishes } = this.state;
		if (selectedDishes.some(({ id }) => dishToSelect.id === id)) {
			return;
		}
		selectedDishes.push(dishToSelect);

		this.setState({
			selectedDishes,
		});
	};

	_handleUnselectDish = dishToUnselect => {
		if (this.state.selectedDishes.some(({ id }) => dishToUnselect.id === id)) {
			this.setState(prevState => {
				return {
					selectedDishes: prevState.selectedDishes.filter(dish => dish.id !== dishToUnselect.id),
				};
			});
		}
	};

	/**
	 * @param {Dish[]} dishes
	 */
	_renderDishes(dishes) {
		return dishes && dishes.length
			? dishes.map(dish => {
					const isSelected = this.state.selectedDishes.some(({ id }) => id === dish.id);

					return (
						<DishSelector
							key={dish.id}
							isSelected={isSelected}
							dish={dish}
							onSelect={this._handleSelectDish}
							onUnselect={this._handleUnselectDish}
						/>
					);
			  })
			: null;
	}

	/**
	 * @param {DishCategory} category
	 */
	_renderCategory(category) {
		return (
			<Expander
				key={category.id}
				className="meal-category border-bottom"
				headerClassName="meal-category__title"
				caption={category.name}
			>
				<div className="meal-category__dishes today-order-menu__dishes">
					{this._renderDishes(category.dishes)}
				</div>
			</Expander>
		);
	}

	/**
	 * @param {Supplier} supplier
	 */
	_renderSupplier(supplier) {
		const selectedSupplier = this._getSelectedSupplier();
		const categoriesCanBeShown = !selectedSupplier || selectedSupplier.id === supplier.id;

		return (
			<div key={supplier.id} className="supplier border">
				<div className="supplier__title">{supplier.name}</div>
				{categoriesCanBeShown &&
					supplier.categories.map(category => {
						return this._renderCategory(category);
					})}
			</div>
		);
	}

	render() {
		const { suppliers } = this.props.menu;
		const { isOrdered } = this.state;
		console.log(this._getSelectedSupplier());

		return suppliers.length > 0 ? (
			<Row>
				{isOrdered ? (
					<Col>
						<Alert color="success">Обед заказан успешно!</Alert>
					</Col>
				) : (
					<>
						<Col
							className="today-order-menu"
							xs={{ size: 12, order: 2 }}
							sm={{ size: 12, order: 2 }}
							md={{ size: 8, order: 1 }}
						>
							{suppliers.map(supplier => {
								return this._renderSupplier(supplier);
							})}
						</Col>
						<Col xs={{ size: 12, order: 1 }} sm={{ size: 12, order: 1 }} md={{ size: 4, order: 2 }}>
							<ShoppingBasket
								dishes={this.state.selectedDishes}
								onMakeOrder={this._handleOrder}
								availableMoneyToOrder={51}
								onUnselectDish={this._handleUnselectDish}
							/>
						</Col>
					</>
				)}
			</Row>
		) : null;
	}
}
