import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachineImg from "./img/VendingMachine.png";

class VendingMachine extends Component {
	render() {
		return (
			<div
				className='VendingMachine'
				style={{ backgroundImage: `url(${vendingMachineImg})` }}
			>
				<Message>
					<h1>I am a vending maching. What would you like?</h1>
				</Message>
				<Message>
					<h1>
						<Link exact to='/soda'>
							Soda
						</Link>
					</h1>
					<h1>
						<Link exact to='/chips'>
							Chips
						</Link>
					</h1>
					<h1>
						<Link exact to='/sardines'>
							Sardines
						</Link>
					</h1>
				</Message>
			</div>
		);
	}
}

export default VendingMachine;
