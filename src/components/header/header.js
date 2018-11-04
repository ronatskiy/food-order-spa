import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";

import User from "./user/user";
import RootContext from "../../store/root-context";

import "./header.scss";

class Header extends React.Component {
	static contextType = RootContext;

	state = {
		isOpen: false,
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	render() {
		const { className } = this.props;

		return (
			<header className={`header ${className}`}>
				<Container className="px-0">
					<Navbar dark expand="md">
						<Link className="navbar-brand" to="/">
							Горячие обеды
						</Link>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto mr-auto" navbar>
								<NavItem>
									<Link className="nav-link" to="/order/">
										Заказать обед
									</Link>
								</NavItem>
								<NavItem>
									<Link className="nav-link" to="/week-order/">
										Заказ на неделю
									</Link>
								</NavItem>
								<NavItem>
									<Link className="nav-link" to="/my-order/">
										Мой обед
									</Link>
								</NavItem>
							</Nav>
							<Nav navbar>
								<NavItem>
									{!this.context.auth.isAuthenticated ? (
										<NavLink onClick={this.context.auth.toggleAuth} href="#">
											Вход
										</NavLink>
									) : (
										<span className="navbar-text">
											<User name="Roman" />
										</span>
									)}
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</Container>
			</header>
		);
	}
}

export default Header;
