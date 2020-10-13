import React, { Component } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";

class Header extends Component {
	render() {
		return (
			<Navbar dark>
				<NavbarBrand className="mr-auto" href="/">
					<Button
						style={{ backgroundColor: "#128C7E", border: "none", height: 50 }}
					>
						<span className="fa fa-arrow-left"></span>
					</Button>
				</NavbarBrand>
			</Navbar>
		);
	}
}
export default Header;
