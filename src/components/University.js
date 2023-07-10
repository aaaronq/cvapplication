import React, { Component } from "react";
import Input from "./Input";

export default class University extends Component {
	constructor(props) {
		super(props);

		this.state = {
			university: "University",
			updating: false,
		};

		this.updateUniversity = this.updateUniversity.bind(this);
		this.changeUniversity = this.changeUniversity.bind(this);
	}

	updateUniversity() {
		this.setState({
			updating: true,
		});
	}

	changeUniversity(name) {
		this.setState({
			university: name,
			updating: false,
		});
	}

	render() {
		return (
			<>
				{this.state.updating ? (
					<Input
						currentName={this.state.university}
						changeName={this.changeUniversity}
						type="University"
					/>
				) : (
					<p onClick={this.updateUniversity}> {this.state.university} </p>
				)}
			</>
		);
	}
}
