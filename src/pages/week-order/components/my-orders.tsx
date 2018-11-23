import React from "react";
import { Table } from "reactstrap";

import Day from "../../../entities/day";
import { UserOrder } from "../../../entities/types";
import { transformDayName } from "../../../utils/transform-day-name";
import SupplierBadge from "../../../components/supplier-badge/supplier-badge";
import "./my-orders.scss";

interface Props {
	orders: UserOrder[];
	days: Day[];
}

const MyOrders: React.FC<Props> = ({ orders, days }) => {
	return (
		<Table className="my-orders" responsive bordered size="sm">
			<thead>
				<tr>
					{days.map(({ shortName }) => (
						<th key={shortName}>{transformDayName(shortName)}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{orders.length > 0 && (
					<tr>
						{days.map(({ shortName }) => {
							const userOrder = orders.find(o => o.day.shortName === shortName);

							return (
								<td key={shortName}>
									{userOrder && (
										<div>
											<SupplierBadge supplierName={userOrder.order.supplierName} />

											{userOrder.order.dishes.length > 0 &&
												userOrder.order.dishes.map(dish => (
													<div className="my-orders__dish-view" key={dish.id}>
														{dish.name}
													</div>
												))}
										</div>
									)}
								</td>
							);
						})}
					</tr>
				)}
			</tbody>
		</Table>
	);
};

export default MyOrders;
