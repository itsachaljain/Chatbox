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
	render() {
		return (
			<div>
				<RenderMessages
					messages={this.props.messages}
					postMessage={this.props.postMessage}
				/>
			</div>
		);
	}
}
export default Display;
