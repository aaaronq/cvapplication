import React, { Component } from "react";
import Input from "./Input"

export default class Address extends Component {
	constructor() {
		super();

        this.state = {
            updating: false,
            address: "Address"
        }

        this.updateAddress = this.updateAddress.bind(this);
        this.changeAddress = this.changeAddress.bind(this);

	}

    updateAddress() {
        this.setState({
            updating: true
        })
    }

    changeAddress(address) {
        this.setState({
            updating: false,
            address: address
        })
    }

	render() {
		return (
			<div className="address">
				<h4> Address</h4>
                {this.state.updating ? (
                    <Input
                    changeName={this.changeAddress} 
                    type="Address"
                    currentName={this.state.address}
                    />
                ) : (
                    <p onClick={this.updateAddress}> {this.state.address} </p>
                )}
			</div>
		);
	}
}
