import React, { Component } from "react";
import '../Main.css'
import Experience from "./Experience"
import Personal from "./Personal"

export default class Main extends Component {
	constructor() {
		super();
	}

	render() {
        return (
            <div className="main">
                <Experience/>
                <Personal/>
            </div>
        )
    }
}
