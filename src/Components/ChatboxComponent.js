import React, { Component } from "react";
import Header from "./HeaderComponent";
import Display from "./DisplayComponent";
import { connect } from "react-redux";
import { postMessage, fetchMessages } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
	return {
		messages: state.messages,
	};
};

const mapDispatchToProps = (dispatch) => ({
	postMessage: (message) => dispatch(postMessage(message)),
	fetchMessages: () => {
		dispatch(fetchMessages());
	},
});

class Chatbox extends Component {
	componentDidMount() {
		this.props.fetchMessages();
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-4">
					<Header />
				</div>
				<div className="col-8">
					<Display messages={this.props.messages.messages} />
				</div>
			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Chatbox);
