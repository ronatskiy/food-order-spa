import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { NavItem, NavLink } from "reactstrap";

import { transformDayName } from "./transform-day-name";
import Day from "../../../entities/day";
import "./day-tab.scss";

class DayTab extends React.Component {
	static propTypes = {
		day: PropTypes.instanceOf(Day).isRequired,
		isActive: PropTypes.bool.isRequired,
		onClick: PropTypes.func.isRequired,
	};

	_handleClick = () => {
		if (this.props.isActive) {
			return;
		}

		this.props.onClick(this.props.day.shortName);
	};

	render() {
		const { isHoliday, shortName } = this.props.day;
		const classNames = cn("day-tab", {
			"day-tab--holiday": isHoliday,
			"day-tab--active": this.props.isActive,
		});

		return (
			<NavItem className={classNames}>
				<NavLink onClick={this._handleClick}>
					<div className={cn("day-tab__day-name", { "day-tab__day-name--holiday": isHoliday })}>
						{transformDayName(shortName)}
					</div>
				</NavLink>
			</NavItem>
		);
	}
}

export default DayTab;
