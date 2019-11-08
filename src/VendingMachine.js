import React, { Component } from "react";
import "./VendingMachine.css";
import vendingMachineImg from "./img/VendingMachine.png";

class VendingMachine extends Component {
	render() {
		return (
			<div
				className='VendingMachine'
				style={{ backgroundImage: `url(${vendingMachineImg})` }}
			>
				<h1>I am a vending maching. What would you like?</h1>
			</div>
		);
	}
}

export default VendingMachine;
