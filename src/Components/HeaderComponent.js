import React, { Component } from "react";
import { Nav, NavItem, Navbar } from "reactstrap";

class Header extends Component {
	render() {
		return (
			<>
				<Navbar dark expand="md">
					<Nav navbar>
						<img
							src="images/cat.jpeg"
							height="70"
							width="70"
							alt="display pic"
						/>
						Achal
					</Nav>
				</Navbar>
			</>
		);
	}
}
export default Header;
