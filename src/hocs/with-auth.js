import React from "react";

import { inject, observer } from "mobx-react";

function withAuth(Control) {
	return inject("rootStore")(
		observer(
			class extends React.Component {
				handleClick = () => {
					if (!this.props.rootStore.identity.isAuthenticated) {
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
			},
		),
	);
}

export default withAuth;
