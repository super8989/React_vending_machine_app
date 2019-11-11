import React, { Component } from "react";
import { Link } from "react-router-dom";
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
				<Link exact to='/soda'>
					Soda
				</Link>
				<Link exact to='/chips'>
					Chips
				</Link>
				<Link exact to='/sardines'>
					Sardines
				</Link>
			</div>
		);
	}
}

export default VendingMachine;
