import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
	render() {
		return (
			<Navbar dark>
				<NavbarBrand className="mr-auto" href="/">
					<img
						src="./images/logo.png"
						alt="logo"
						height="60px"
						style={{ paddingLeft: 520 }}
					/>
				</NavbarBrand>
			</Navbar>
		);
	}
}
export default Header;
