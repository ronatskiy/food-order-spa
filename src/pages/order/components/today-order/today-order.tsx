import React from "react";
import { Col, Row, Alert } from "reactstrap";
import { inject, observer } from "mobx-react";

import ShoppingBasket from "../shopping-basket/shopping-basket";
import DayMenu from "../../../../entities/day-menu";
import { RootStore } from "../../../../store";
import Expander from "../../../../components/expander";
import DishCollection from "../dish-collection";
import "./today-order.scss";
import Supplier from "../../../../entities/supplier";
import Dish from "../../../../entities/dish";
import DishCategory from "../../../../entities/dish-category";

interface Props {
	rootStore?: RootStore;
	menu: DayMenu;
}

interface State {
	selectedDishes: Dish[];
	isOrdered: boolean;
}

@inject("rootStore")
@observer
export default class TodayOrder extends React.Component<Props, State> {
	state: State = {
		selectedDishes: [],
		isOrdered: false,
	};

	private getSelectedSupplier() {
		return this.props.menu.suppliers.find((supplier: Supplier) =>
			supplier.allDishes.some((dish: Dish) => this.state.selectedDishes.includes(dish)),
		);
	}

	private handleOrder = async () => {
		try {
			await this.props.rootStore!.longOperation(() =>
				this.props.rootStore!.orderService.orderLunch(this.state.selectedDishes || []));

			this.setState({ selectedDishes: [], isOrdered: true });
		} catch (e) {
			console.error(e.message);
		}
	};

	private handleSelectDish = (dishToSelect: Dish) => {
		const { selectedDishes } = this.state;
		if (selectedDishes.some(({ id }) => dishToSelect.id === id)) {
			return;
		}
		selectedDishes.push(dishToSelect);

		this.setState({
			selectedDishes,
		});
	};

	private handleUnselectDish = (dishToUnselect: Dish) => {
		if (this.state.selectedDishes.some(({ id }) => dishToUnselect.id === id)) {
			this.setState(prevState => {
				return {
					selectedDishes: prevState.selectedDishes.filter(dish => dish.id !== dishToUnselect.id),
				};
			});
		}
	};

	private renderCategory(category: DishCategory) {
		return (
			<Expander
				key={category.id}
				className="meal-category border-bottom"
				headerClassName="meal-category__title"
				caption={category.name}
			>
				<div className="meal-category__dishes today-order-menu__dishes">
					<DishCollection
						canMultiSelect={category.canMultiSelect}
						dishes={category.dishes}
						selectedDishes={this.state.selectedDishes}
						onSelect={this.handleSelectDish}
						onUnselect={this.handleUnselectDish}
					/>
				</div>
			</Expander>
		);
	}

	private renderSupplier(supplier: Supplier) {
		const selectedSupplier = this.getSelectedSupplier();
		const categoriesCanBeShown = !selectedSupplier || selectedSupplier.id === supplier.id;

		return (
			<div key={supplier.id} className="supplier border">
				<div className="supplier__title">{supplier.name}</div>
				{categoriesCanBeShown &&
					supplier.categories.map((category: DishCategory) => {
						return this.renderCategory(category);
					})}
			</div>
		);
	}

	public render() {
		const { suppliers } = this.props.menu;
		const { isOrdered } = this.state;

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
							{suppliers.map((supplier: Supplier) => {
								return this.renderSupplier(supplier);
							})}
						</Col>
						<Col xs={{ size: 12, order: 1 }} sm={{ size: 12, order: 1 }} md={{ size: 4, order: 2 }}>
							<ShoppingBasket
								dishes={this.state.selectedDishes}
								onMakeOrder={this.handleOrder}
								availableMoneyToOrder={51}
								onUnselectDish={this.handleUnselectDish}
							/>
						</Col>
					</>
				)}
			</Row>
		) : null;
	}
}
