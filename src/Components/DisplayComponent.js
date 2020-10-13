import React, { Component } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function RenderMessages({ messages }) {
	if (messages != null) {
		return (
			<div className="container">
				<ul className="list-unstyled">
					{messages.map((message) => {
						return (
							<Card
								className="text-center"
								style={{ backgroundColor: "#fcfa91" }}
								border="dark"
							>
								<CardTitle>Naman</CardTitle>
								<hr></hr>
								<CardBody>
									<p>{message.message}</p>
								</CardBody>
							</Card>
						);
					})}
				</ul>
			</div>
		);
	}
}

class Display extends Component {
	scrollToBottom = () => {
		this.messagesEnd.scrollIntoView({ behavior: "smooth" });
	};

	componentDidMount() {
		this.scrollToBottom();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	render() {
		return (
			<div>
				<RenderMessages
					messages={this.props.messages}
					postMessage={this.props.postMessage}
				/>
				<div
					style={{ float: "left", clear: "both" }}
					ref={(el) => {
						this.messagesEnd = el;
					}}
				></div>
			</div>
		);
	}
}
export default Display;
