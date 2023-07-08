import React, { Component } from "react";
import "../Header.css";
import Name from "./Name.js";
import Profession from "./Profession.js";
import ProfilePic from "./ProfilePic.js";

export default class Header extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<header className="header">
				<div className="headerInfo">
					<Name/>
					<Profession/>
				</div>
				<ProfilePic/>
			</header>
		);
	}
}
