import React from "react";
import { Container } from "reactstrap";

const Footer = ({ className }) => {
	return (
		<footer className={`footer ${className}`}>
			<Container>&copy; 2018 Food order group</Container>
		</footer>
	);
};

export default Footer;
