import React from "react";
import { Alert, Button } from "reactstrap";

import RootContext from "../store/root-context";

const NotAuthenticatedAlert = ({ onLogin }) => (
	<Alert className="my-3" color="danger">
		<div>Эта страница доступна только авторизированным пользователям.</div>
		<div>
			Чтобы продолжить выполните{" "}
			<Button onClick={onLogin} size="sm" color="primary">
				Вход
			</Button>
		</div>
	</Alert>
);

function visibleOnlyForAuthenticatedUser(Control) {
	return class extends React.Component {
		static contextType = RootContext;

		render() {
			return this.context.auth.isAuthenticated ? (
				<Control {...this.props} onClick={this.handleClick} />
			) : (
				<NotAuthenticatedAlert onLogin={this.context.auth.toggleAuth} />
			);
		}
	};
}

export default visibleOnlyForAuthenticatedUser;
