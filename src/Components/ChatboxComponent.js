import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Display from "./DisplayComponent";

class Chatbox extends Component {
	render() {
		return (
			<div>
				<Header />
				<Display />
				<Footer />
			</div>
		);
	}
}
export default Chatbox;
