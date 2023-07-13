import React, { Component } from "react";
import Input from "./Input"

export default class Phone extends Component {
	constructor() {
		super();

        this.state = {
            updating: false,
            phone: "+337300203541"
        }

        this.updatePhone = this.updatePhone.bind(this);
        this.changePhone = this.changePhone.bind(this);

	}

    updatePhone() {
        this.setState({
            updating: true
        })
    }

    changePhone(phone) {
        this.setState({
            updating: false,
            phone: phone
        })
    }

	render() {
		return (
			<div className="phone">
				<h4> Phone</h4>
                {this.state.updating ? (
                    <Input
                    changeName={this.changePhone} 
                    type="Phone"
                    currentName={this.state.phone}
                    />
                ) : (
                    <p onClick={this.updatePhone}> {this.state.phone} </p>
                )}
			</div>
		);
	}
}
