import React from "react";
import { Alert, Button } from "reactstrap";
import { RootStore } from "../store";
import { inject, observer } from "mobx-react";

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

interface InjectedProps {
	rootStore?: RootStore;
}

function visibleOnlyForAuthenticatedUser<T extends InjectedProps>(Control: React.ComponentType<T>) {
	return inject("rootStore")(observer(
		function (props: T) {
			const { identity } = props.rootStore!;

			return identity.isAuthenticated
				? (<Control {...props} />)
				: (<NotAuthenticatedAlert onLogin={() => identity.login()}/>);
		}
	))
}

export default visibleOnlyForAuthenticatedUser;
