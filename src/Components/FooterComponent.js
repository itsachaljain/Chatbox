import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "",
		};
	}
	handleSubmit = () => {
		if (this.state.message == "") {
			this.setState({ message: "" });
		} else {
			this.props.postMessage(this.state.message);
			this.setState({ message: "" });
		}
	};

	handleOnChange = (e) => {
		this.setState({ message: e.target.value });
	};

	render() {
		return (
			<div className="footer">
				<Input
					value={this.state.message}
					onChange={this.handleOnChange}
					name="message"
					placeholder="Type a message"
					onKeyPress={(event) => {
						if (event.key === "Enter") {
							this.handleSubmit();
						}
					}}
					style={{ borderRadius: 20, height: 30, width: 680 }}
				/>
				<Button
					onClick={this.handleSubmit}
					type="submit"
					size="md"
					style={{
						backgroundColor: "#128C7E",
						color: "black",
						border: "none",
						borderRadius: 30,
						cursor: "pointer",
						height: 30,
						width: 30,
						marginLeft: 10,
					}}
				>
					<span className="fa fa-paper-plane"></span>
				</Button>
				<Link
					size="md"
					style={{
						backgroundColor: "#128C7E",
						color: "black",
						border: "none",
						cursor: "pointer",
						paddingLeft: 370,
					}}
					to="/"
				>
					<span className="fa fa-sign-out"></span> Exit
				</Link>
			</div>
		);
	}
}
export default Footer;
