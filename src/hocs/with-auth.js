import React from "react";

import RootContext from "../store/root-context";

function withAuth(Control) {
	return class extends React.Component {
		static contextType = RootContext;

		handleClick = () => {
			if (!this.context.isAuthenticated) {
				alert("Переходим на страницу аутентификации");
				return;
			}
			console.log(this.props);
			this.props.onClick();
		};

		render() {
			const { onClick, ...rest } = this.props;

			return <Control {...rest} onClick={this.handleClick} />;
		}
	};
}

export default withAuth;
