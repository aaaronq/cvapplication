import React, { Component } from "react";
import Input from "./Input.js"

export default class Name extends Component {
	constructor() {
		super();

		this.state = {
            name: "Aaron Quigley",
			updating: false,
		};

        this.updateName = this.updateName.bind(this);
        this.changeName = this.changeName.bind(this);
	}

	updateName() {
		this.setState({
			updating: true,
		});
	}

    changeName(name) {
        this.setState({
            name: name,
            updating: false,
        });
    }

	render() {
		return (
			<>
				{this.state.updating ? (
					<Input 
                    currentName={this.state.name} 
                    changeName={this.changeName}
                    type="Name"/>
				) : (
					<h1 onClick={this.updateName}> {this.state.name}</h1>
				)}
			</>
		);
	}
}
