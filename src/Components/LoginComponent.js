import React, { Component } from "react";
import Header from "./HeaderComponent";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

class Login extends Component {
	constructor(props) {
		super(props);
	}

	handleLogin = (event) => {
		this.toggleModal();
		alert(
			"Username: " +
				this.username.value +
				"Password: " +
				this.password.value +
				"Remember: " +
				this.remember.checked
		);
		event.preventDefault();
	};

	render() {
		return (
			<div className="row">
				<div className="col-md-4">
					<Header />
				</div>
				<div className="col-md-8">
					<Form onSubmit={this.handleLogin}>
						<FormGroup style={{ paddingTop: 270, paddingLeft: 450 }}>
							<Label htmlFor="username">Username</Label>{" "}
							<Input
								type="text"
								id="username"
								name="username"
								innerRef={(input) => (this.username = input)}
							/>
						</FormGroup>
						<div style={{ padding: 10 }}></div>
						<FormGroup style={{ paddingLeft: 455 }}>
							<Label htmlFor="password">Password</Label>{" "}
							<Input
								type="password"
								id="password"
								name="password"
								innerRef={(input) => (this.password = input)}
							/>
						</FormGroup>
						<div style={{ paddingTop: 20 }}></div>
						<Link
							size="md"
							style={{
								backgroundColor: "aquamarine",
								color: "black",
								border: "none",
								cursor: "pointer",
								marginLeft: 10,
								paddingLeft: 600,
							}}
							to="/chatbox"
						>
							<span className="fa fa-sign-in"></span> Login
						</Link>
					</Form>
				</div>
			</div>
		);
	}
}
export default Login;
