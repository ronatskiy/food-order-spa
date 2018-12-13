import React from "react";
import compose from "lodash.flowright";
import { inject, observer } from "mobx-react";
import { Alert, Col, Row, TabContent, TabPane } from "reactstrap";

import visibleOnlyForAuthenticatedUser from "../../hocs/visible-only-for-authenticated-user";
import TodayOrder from "./components/today-order/today-order";
import DaySwitcher from "./components/day-switcher";
import DayMenu from "../../domain/day-menu";
import OrderPageStore from "./store/order-page-store";
import "./index.scss";

interface Props {
	orderPageStore?: OrderPageStore;
}

function Order(props: Props) {
	const { activeDay, nextWeekMenu, switchDay, orderLunch } = props.orderPageStore!;

	return nextWeekMenu.length > 0 ? (
		<Row>
			<Col>
				<h1 className="page-heading">Заказ обеда на будущую неделю</h1>
				<DaySwitcher
					days={nextWeekMenu.map((menu: DayMenu) => menu.weekDay)}
					activeDay={activeDay}
					onSwitch={switchDay}
				/>
				<TabContent activeTab={activeDay!.shortName}>
					{nextWeekMenu.map((dayMenu: DayMenu) => {
						const { shortName, isHoliday } = dayMenu.weekDay;

						return (
							<TabPane className="py-2" key={shortName} tabId={shortName}>
								{!isHoliday && dayMenu && <TodayOrder menu={dayMenu} onOrderLunch={orderLunch}/>}
								{isHoliday && <Alert color="info">Заказ обедов на выходной день не доступен</Alert>}
							</TabPane>
						);
					})}
				</TabContent>
			</Col>
		</Row>
	) : (
		<Row className="my-4">
			<Col>
				<Alert color="warning">
					Заказ обеда пока не доступен! Ожидается обновление меню от поставщика...
				</Alert>
			</Col>
		</Row>
	);
}

// @ts-ignore
export default compose(visibleOnlyForAuthenticatedUser, inject("orderPageStore"), observer)(Order);
