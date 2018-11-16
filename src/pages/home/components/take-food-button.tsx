import React from "react";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";

interface Props {
	name: string;
	history: any;
}

class TakeFoodButton extends React.PureComponent<Props> {
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

// @ts-ignore
export default withRouter(TakeFoodButton);
