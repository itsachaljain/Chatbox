import React, { Component } from "react";
import Header from "./HeaderComponent";
import Display from "./DisplayComponent";
import { connect } from "react-redux";
import { postMessage, fetchMessages } from "../redux/ActionCreators";
import Footer from "./FooterComponent";

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
			<>
				<Header />
				<div style={{ padding: 30 }}></div>
				<Display messages={this.props.messages.messages} />
				<div style={{ padding: 20 }}></div>
				<Footer postMessage={this.props.postMessage} />
			</>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Chatbox);
