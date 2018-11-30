import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

import { RootStore } from "../store";

interface Props {
	rootStore?: RootStore;
}

@inject("rootStore")
@observer
class LogoutPage extends React.Component<Props> {
	componentDidMount() {
		this.props.rootStore!.identity.logout();
	}

	render() {
		const { isAuthenticated } = this.props.rootStore!.identity;

		return (
			<Row tag="section" className="mt-4">
				{isAuthenticated ? (
					<Col>Идет обработка...</Col>
				) : (
					<Col lg={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
						<div>Мы будем скучать по тебе :)</div>
						<div>
							<Link to="/">Вернуться на главную</Link>
						</div>
					</Col>
				)}
			</Row>
		);
	}
}

export default LogoutPage;
