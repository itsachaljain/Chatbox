import React, { Component } from "react";
import Footer from "./FooterComponent";

function RenderMessages({ messages, postMessage }) {
	if (messages != null) {
		return (
			<div className="container">
				<ul className="list-unstyled">
					{messages.map((message) => {
						return (
							<li>
								<p>{message.message}</p>
								<p>
									{new Intl.DateTimeFormat("en-US", {
										year: "numeric",
										month: "short",
										day: "2-digit",
									}).format(new Date(Date.parse(message.date)))}
								</p>
							</li>
						);
					})}
				</ul>
				<div>
					<Footer postMessage={postMessage} />
				</div>
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
