import React, { Component } from "react";

export default class Input extends Component {
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

    render () {
        const {currentName, type} = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <input id={type + "Input"} className="input" type="text" defaultValue={currentName}></input>
                <button className="submitBtn" type="submit" data-html2canvas-ignore>Submit</button>
            </form>
        )
    }
}