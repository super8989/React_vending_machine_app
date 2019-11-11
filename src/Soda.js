import React, { Component } from "react";
import { Link } from "react-router-dom";

import sodaImg from "./img/Soda.png";
import "./Soda.css";

class Soda extends Component {
	render() {
		return (
			<div className='Soda'>
				<img src={sodaImg} alt='coca cola can' />
				<h1>Taste of originality Coca Cola</h1>
				<h3>I'm actually a Pepsi fan</h3>
				<p>(Pepsi please)</p>
				<img src={sodaImg} alt='coca cola can' />
				<Link exact to='/'>
					Go Back
				</Link>
			</div>
		);
	}
}

export default Soda;
