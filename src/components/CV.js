import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";

class CV extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="cv" id="cv">
				<Header />
				<Main />
			</div>
		);
	}
}

export default CV;
