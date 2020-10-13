import React, { Component } from "react";

function RenderMessages({ messages }) {
	if (messages != null) {
		return (
			<div className="container">
				<ul className="list-unstyled">
					{messages.map((message) => {
						return (
							<li>
								<p>{message.message}</p>
							</li>
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
