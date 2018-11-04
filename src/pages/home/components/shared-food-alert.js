import React from "react";
import PropTypes from "prop-types";
import { Table, Alert, Badge, Collapse } from "reactstrap";

import ChevronDown from "../../../components/logos/chevron-down";
import TakeFoodButton from "./take-food-button";
import DishView from "./dish-view";

class SharedFoodAlert extends React.PureComponent {
	static propTypes = {
		sharedTodayOrders: PropTypes.array.isRequired,
	};

	state = {
		expanded: false,
	};

	toggle = () => {
		this.setState(prevState => ({
			expanded: !prevState.expanded,
		}));
	};

	render() {
		const { sharedTodayOrders } = this.props;
		const { orderCount } = sharedTodayOrders.length;

		return (
			<Alert color="warning">
				<div>Внимание! Сегодня есть еда в общем доступе!</div>
				<div>
					Количество расшаренных обедов{" "}
					<Badge color="light" pill>
						{orderCount}
					</Badge>
				</div>
				<div>
					<span className="alert-link caret" onClick={this.toggle}>
						Подробнее
						<ChevronDown />
					</span>
				</div>
				<Collapse isOpen={this.state.expanded}>
					<Table className="mt-4" bordered responsive size="sm">
						<thead>
							<tr>
								<th>Имя</th>
								<th>Заказ</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{sharedTodayOrders.map(({ userName, order }) => (
								<tr key={userName}>
									<td>{userName}</td>
									<td>
										{order && (
											<>
												<div className="today-orders-table__supplier-name px-2">
													<strong>{order.supplierName}</strong>
												</div>
												{order.dishes.length > 0 &&
													order.dishes.map(dish => <DishView key={dish.id} dish={dish} />)}
											</>
										)}
									</td>
									<td className="text-right">
										<TakeFoodButton name={userName} />
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Collapse>
			</Alert>
		);
	}
}

export default SharedFoodAlert;
