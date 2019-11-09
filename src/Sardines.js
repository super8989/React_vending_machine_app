import React, { Component } from "react";
import "./Sardines.css";

class Sardines extends Component {
	render() {
		return (
			<div
				className='Sardines'
				style={{
					backgroundImage:
						"url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif"
				}}
			>
				<h1>Ooh look at all the sardines!</h1>
			</div>
		);
	}
}

export default Sardines;
