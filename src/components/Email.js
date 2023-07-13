import React, { Component } from "react";
import Input from "./Input"

export default class Email extends Component {
	constructor() {
		super();

        this.state = {
            updating: false,
            email: "aaronquigley24@gmail.com"
        }

        this.updateEmail = this.updateEmail.bind(this);
        this.changeEmail = this.changeEmail.bind(this);

	}

    updateEmail() {
        this.setState({
            updating: true
        })
    }

    changeEmail(email) {
        this.setState({
            updating: false,
            email: email
        })
    }

	render() {
		return (
			<div className="email">
				<h4> Email</h4>
                {this.state.updating ? (
                    <Input
                    changeName={this.changeEmail} 
                    type="Email"
                    currentName={this.state.email}
                    />
                ) : (
                    <p onClick={this.updateEmail}> {this.state.email} dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd </p>
                )}
			</div>
		);
	}
}
