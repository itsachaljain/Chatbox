import React, { Component } from "react";
import { Button, Input } from "reactstrap";

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="footer" style={{ backgroundColor: "aquamarine" }}>
					<div className="row" style={{ marginRight: 0 }}>
						<div style={{ padding: 2 }}></div>
						<div className="col-11">
							<Input
								placeholder="Type a message"
								style={{ borderRadius: 20 }}
							/>
						</div>
						<div className="col">
							<Button
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