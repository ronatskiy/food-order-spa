import React from "react";

import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";

class TakeFoodButton extends React.PureComponent {
	handleClick = () => {
		alert(
			"Вы забронировали обед пользователя " +
				this.props.name +
				"\nПожалуйста подтвердите ваши намерения на странице заказа.",
		);
		this.props.history.push("/my-order");
	};

	render() {
		return (
			<Button color="primary" onClick={this.handleClick}>
				Забрать себе
			</Button>
		);
	}
}

export default withRouter(TakeFoodButton);
