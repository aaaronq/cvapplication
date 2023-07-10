import React, { Component } from "react";
import Input from './Input'

export default class Description extends Component {
	constructor() {
		super();

        this.state = {
            updating: false,
            description: "Click here to add a description"
        }
        
        this.updateDescription = this.updateDescription.bind(this);
        this.changeDescription = this.changeDescription.bind(this);

	}

    updateDescription() {
        this.setState({
            updating: true,
        })
    }

    changeDescription(description) {
        this.setState({
            updating: false,
            description: description,
        })
    }

	render() {
		return (
			<div className="description">
				<h4> Description </h4>
                {this.state.updating === true ? (
                    <Input
                    currentName={this.state.description}
                    changeName={this.changeDescription}
                    type="Description"
                    />
                ) : (
				    <p onClick={this.updateDescription}>
                        {this.state.description}
                    </p>
                )}
			</div>
		);
	}
}
