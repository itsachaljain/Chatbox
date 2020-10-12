import React, { Component } from "react";
import { Button, Input } from "reactstrap";

class Footer extends Component {
	handleSubmit(values) {
		this.props.postMessage(values.message);
	}

	render() {
		return (
			<div className="container">
				<div className="footer" style={{ backgroundColor: "aquamarine" }}>
					<div className="row" style={{ marginRight: 0 }}>
						<div style={{ padding: 2 }}></div>
						<div className="col-11">
							<Input
								name="message"
								placeholder="Type a message"
								style={{ borderRadius: 20 }}
							/>
						</div>
						<div className="col">
							<Button
								onSubmit={(values) => this.handleSubmit(values)}
								type="submit"
								size="md"
								style={{
									backgroundColor: "#128C7E",
									border: "none",
									borderRadius: 50,
								}}
							>
								<span className="fa fa-paper-plane"></span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Footer;
