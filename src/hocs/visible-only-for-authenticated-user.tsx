import React from "react";
import { Alert, Button } from "reactstrap";
import { RootStore } from "../store";
import { observer, inject } from "mobx-react";

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
		class extends React.Component<T> {
			render() {
				return this.props.rootStore!.identity.isAuthenticated
					? (<Control {...this.props} />)
					: (<NotAuthenticatedAlert onLogin={() => this.props.rootStore!.authService.login()} />);
			}
		}
	))
}

export default visibleOnlyForAuthenticatedUser;
