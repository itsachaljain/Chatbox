import React, { Component } from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

function RenderMessages({ messages, deleteMessage }) {
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
								<CardTitle>
									Naman
									<Button
										key={messages.id}
										onClick={() => deleteMessage(messages._id)}
										style={{
											backgroundColor: "#fcfa91",
											border: "none",
											cursor: "pointer",
											float: "right",
										}}
									>
										<span className="fa fa-trash"></span>
									</Button>
								</CardTitle>
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
	} else {
		return <div></div>;
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
					deleteMessage={this.props.deleteMessage}
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
