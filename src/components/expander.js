import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "reactstrap";
import ChevronDown from "./logos/chevron-down";
import ChevronUp from "./logos/chevron-up";

class Expander extends React.Component {
	static propTypes = {
		defaultOpen: PropTypes.bool,
	};

	static defaultProps = {
		defaultOpen: false,
	};

	state = {
		isOpen: this.props.defaultOpen,
	};

	_toggleOpen = () => {
		this.setState(prevState => ({ isOpen: !prevState.isOpen }));
	};

	render() {
		const { isOpen } = this.state;
		const { className, headerClassName, caption, children } = this.props;

		return (
			<div className={className}>
				<div
					className={`expander ${headerClassName}`}
					onClick={this._toggleOpen}
					style={{
						cursor: "pointer",
					}}
				>
					{caption} {isOpen ? <ChevronUp /> : <ChevronDown />}
				</div>
				<Collapse isOpen={isOpen}>
					<div className="expander__content">{children}</div>
				</Collapse>
			</div>
		);
	}
}

export default Expander;
