import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";
import Routing from "./Components/Routing";

const store = ConfigureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Routing />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
