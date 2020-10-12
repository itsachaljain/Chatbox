import React, { Component } from "react";
import Chatbox from "./Components/ChatboxComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";

const store = ConfigureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Chatbox />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
