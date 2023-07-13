import React, { Component } from "react";
import '../Personal.css'
import Address from './Address'
import Phone from './Phone'
import Email from './Email'

export default class Personal extends Component {
	constructor() {
		super();
	}

	render() {
        return (
            <div className="personal">
                <h3> Personal Details</h3>
                <Address/>
                <Phone/>
                <Email/>
            </div>
        )
    }
}