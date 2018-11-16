import React from "react";
import { Alert, Button } from "reactstrap";

import { RootContext } from "../store";

interface Props {
	onLogin(): void;
}

const NotAuthenticatedAlert = ({ onLogin }: Props) => (
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


function visibleOnlyForAuthenticatedUser<T>(Control: React.ComponentType<T>) {
	return class extends React.Component<T> {
		public static contextType = RootContext;
		public context!: React.ContextType<typeof RootContext>;

		render() {
			return this.context.isAuthenticated ? (
				<Control {...this.props} />
			) : (
				<NotAuthenticatedAlert onLogin={() => this.context.authService.toggleAuth()} />
			);
		}
	};
}

export default visibleOnlyForAuthenticatedUser;
