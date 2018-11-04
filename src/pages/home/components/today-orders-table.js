import React from "react";
import { Table } from "reactstrap";
import DishView from "./dish-view";

import "./today-orders-table.scss";

const TodayOrdersTable = ({ todayOrders }) => {
	return (
		<section className="mt-4">
			<div className="my-2">Перечень заказанных обедов на сегодня</div>
			<Table className="today-orders-table" responsive bordered striped size="sm">
				<thead>
					<tr>
						<th>Имя</th>
						<th>Заказ</th>
					</tr>
				</thead>
				<tbody>
					{todayOrders.map(({ userName, order }) => (
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
						</tr>
					))}
				</tbody>
			</Table>
		</section>
	);
};

export default TodayOrdersTable;
