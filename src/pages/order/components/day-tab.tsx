import React from "react";
import cn from "classnames";
import { NavItem, NavLink } from "reactstrap";

import { transformDayName } from "./transform-day-name";
import Day from "../../../entities/day";
import "./day-tab.scss";

interface Props {
	day: Day;
	isActive: boolean;
	onClick(shortName: string): void;
}

class DayTab extends React.Component<Props> {
	private handleClick = () => {
		if (this.props.isActive) {
			return;
		}

		this.props.onClick(this.props.day.shortName);
	};

	public render() {
		const { isHoliday, shortName } = this.props.day;
		const classNames = cn("day-tab", {
			"day-tab--holiday": isHoliday,
			"day-tab--active": this.props.isActive,
		});

		return (
			<NavItem className={classNames}>
				<NavLink onClick={this.handleClick}>
					<div className={cn("day-tab__day-name", { "day-tab__day-name--holiday": isHoliday })}>
						{transformDayName(shortName)}
					</div>
				</NavLink>
			</NavItem>
		);
	}
}

export default DayTab;
