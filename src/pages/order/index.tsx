import React from "react";
import { Alert, Col, Row, TabContent, TabPane } from "reactstrap";

import visibleOnlyForAuthenticatedUser from "../../hocs/visible-only-for-authenticated-user";
import TodayOrder from "./components/today-order/today-order";
import DaySwitcher from "./components/day-switcher";
import "./index.scss";
import { RootContext } from "../../store";
import DayMenu from "../../entities/day-menu";

interface Props {}

interface State {
	weekMenu: DayMenu[]
	selectedDay: string;
}

class Order extends React.Component<Props, State> {
	public static contextType = RootContext;
	public context!: React.ContextType<typeof RootContext>;

	state: State = {
		weekMenu: [],
		selectedDay: "",
	};

	public async componentDidMount() {
		try {
			const { longOperation, dishMenuService } = this.context;
			const weekMenu: DayMenu[] = await longOperation(() => dishMenuService.getWeekMenu());
			const [dayMenu] = weekMenu;

			this.setState({
				weekMenu,
			});

			this.switchDay(dayMenu.day.shortName);
		} catch (e) {
			console.log(e.message);
		}
	}

	private switchDay = (dayName: string) => {
		if (this.state.selectedDay !== dayName) {
			this.setState({
				selectedDay: dayName,
			});
		}
	};

	public render() {
		return this.state.weekMenu.length > 0 ? (
			<Row>
				<Col>
					<DaySwitcher
						days={this.state.weekMenu.map((menu: DayMenu) => menu.day)}
						activeDay={this.state.selectedDay}
						onSwitch={this.switchDay}
					/>
					<TabContent activeTab={this.state.selectedDay}>
						{this.state.weekMenu.map((dayMenu: DayMenu) => {
							const { shortName, isHoliday } = dayMenu.day;

							return (
								<TabPane className="py-2" key={shortName} tabId={shortName}>
									{!isHoliday && dayMenu && <TodayOrder menu={dayMenu} />}
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
}

export default visibleOnlyForAuthenticatedUser(Order);
