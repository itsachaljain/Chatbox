import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Chatbox from "./ChatboxComponent";
import Login from "./LoginComponent";

class Routing extends Component {
	render() {
		return (
			<Switch>
				<Route path="/chatbox" component={Chatbox} />
				<Route path="/" component={Login} />
			</Switch>
		);
	}
}
export default Routing;
