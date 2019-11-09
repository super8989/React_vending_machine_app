import React, { Component } from "react";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Sardines from "./Sardines";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<VendingMachine />
				<Chips />
				<Sardines />
			</div>
		);
	}
}

export default App;
