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
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
		};
	}
	componentDidMount() {
		this.props.fetchMessages();
	}

	render() {
		return (
			<div>
				<Header />
				<Display messages={this.props.messages.messages} />
				<Footer postMessage={this.props.postMessage} />
			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Chatbox);
