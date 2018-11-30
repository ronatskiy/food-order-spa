import React from "react";
import { Alert } from "reactstrap";
import { RootStore } from "../store";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";


const NotAuthenticatedAlert = () => (
	<Alert className="my-3" color="danger">
		<div>Эта страница доступна только авторизированным пользователям.</div>
		<div>
			Чтобы продолжить выполните{" "}
			<Link className="btn btn-primary btn-sm" to="/login">
				Вход
			</Link>
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
				: (<NotAuthenticatedAlert />);
		}
	))
}

export default visibleOnlyForAuthenticatedUser;
