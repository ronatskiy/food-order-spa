import React, { FC } from "react";
import { Table } from "reactstrap";
import { inject, observer } from "mobx-react";
import cn from "classnames";

import { UserOrder } from "../../../entities/types";
import RootStore from "../../../store/root-store";
import DishView from "./dish-view";
import "./today-orders.scss";
import SupplierBadge from "../../../components/supplier-badge/supplier-badge";

interface Props {
	rootStore?: RootStore;
	orders: UserOrder[];
}

const TodayOrders: FC<Props> = ({ orders, rootStore }) => {
	const { currentUser, isAuthenticated } = rootStore!.identity;

	return orders.length > 0 ? (
		<section className="mt-4">
			<h1 className="my-2 page-heading">Перечень всех заказанных обедов на сегодня</h1>
			<Table className={cn("today-orders", { "today-orders--authorized": isAuthenticated })} responsive bordered size="sm">
				<thead>
					<tr>
						<th>Имя</th>
						<th>Детали заказа</th>
					</tr>
				</thead>
				<tbody>
					{orders.map(({ user, order }) => {
						const classNames = cn(
							"today-orders__cell",
							{
								"today-orders__cell--active" : isAuthenticated && currentUser!.fullName === user.fullName
							}
						);

						return (
							<tr key={user.fullName}>
								<td className={classNames}>{user.fullName}</td>
								<td className={classNames}>
									{order && (
										<div className="today-orders__order-details">
											<div className="today-orders__dishes">
												{order.dishes.length > 0 &&
													order.dishes.map(dish => <DishView key={dish.id} dish={dish}/>)}
											</div>
											<div className="today-orders__supplier">
												<SupplierBadge supplierName={order.supplierName} />
											</div>
										</div>
									)}
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</section>
	) : null;
};

export default inject("rootStore")(observer(TodayOrders));
