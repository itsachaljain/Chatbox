import React, { Component } from "react";
import { Card, CardBody, CardTitle, } from 'reactstrap';
import '../App.css'

function RenderMessages({ messages }) {
	if (messages != null) {
		return (
			<div className="container">
				<ul className="list-unstyled">
					{messages.map((message) => {
						return (
							<div className = "card">
								<Card>
									<div className = "card-title"><CardTitle>Naman</CardTitle></div>
									<hr></hr>
									<div className = "card-body">
										<CardBody>
											<p>{message.message}</p>
										</CardBody>
									</div>
								</Card>
							</div>
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
