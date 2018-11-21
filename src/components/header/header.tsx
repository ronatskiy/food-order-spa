import React from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Navbar,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu, DropdownItem
} from "reactstrap";

import User from "./user/user";
import { RootStore } from "../../store";

import "./header.scss";
import { observer, inject } from "mobx-react";
import { action, observable } from "mobx";

interface Props {
	rootStore?: RootStore;
	className: string;
}

@inject("rootStore")
@observer
class Header extends React.Component<Props> {
	@observable
	isOpen: boolean = false;

	toggle = action(() => {
		this.isOpen = !this.isOpen;
	});

	render() {
		const { className } = this.props;
		const { identity } = this.props.rootStore!;

		return (
			<header className={`header ${className}`}>
				<Container className="px-0">
					<Navbar dark expand="md">
						<Link className="navbar-brand" to="/">
							Горячие обеды
						</Link>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.isOpen} navbar>
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
								{!identity.isAuthenticated && (
									<NavItem>
										<NavLink onClick={() => identity.login()} href="#">
											Вход
										</NavLink>
									</NavItem>
								)}
								{identity.isAuthenticated && (
									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret>
											<User name={identity.currentUser!.fullName} />
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem disabled>
												Профиль
											</DropdownItem>
											<DropdownItem divider />
											<DropdownItem onClick={() => identity.logout()}>
												Выход
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
								)}
							</Nav>
						</Collapse>
					</Navbar>
				</Container>
			</header>
		);
	}
}

export default Header;
