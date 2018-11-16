import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";

import User from "./user/user";
import RootContext from "../../store/root-context";

import "./header.scss";

interface Props {
	className: string;
}

interface State {
	isOpen: boolean;
}

class Header extends React.Component<Props, State> {
	static contextType = RootContext;
	public context!: React.ContextType<typeof RootContext>;

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
		const { isAuthenticated, authService } = this.context;


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
									{!isAuthenticated ? (
										<NavLink onClick={() => authService.toggleAuth()} href="#">
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
