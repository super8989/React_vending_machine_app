import React, { Component } from "react";
import Message from "./Message";

import { Link } from "react-router-dom";

import sodaImg from "./img/Soda.png";
import "./Soda.css";

class Soda extends Component {
	render() {
		return (
			<div className='Soda'>
				<img src={sodaImg} alt='coca cola can' />
				<Message>
					<h1>Taste of originality Coca Cola</h1>
					<h3>I'm actually a Pepsi fan</h3>
					<p>(Pepsi please)</p>
					<Link exact to='/'>
						Go Back
					</Link>
				</Message>
				<img src={sodaImg} alt='coca cola can' />
			</div>
		);
	}
}

export default Soda;
