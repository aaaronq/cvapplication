import React, { Component } from "react";

export default class DescriptionInput extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		let newName = e.target[0].value;
		if (newName.length < 1) newName = this.props.type;
		this.props.changeName(newName);
	}

	render() {
		const { currentName } = this.props;
		return (
			<form onSubmit={this.handleSubmit}>
				<textarea
					id="DescriptionInput"
					className="input"
					type="text"
					defaultValue={currentName}
                    maxLength="750"
				></textarea>
				<button className="submitBtn" type="submit">
					Submit
				</button>
			</form>
		);
	}
}
