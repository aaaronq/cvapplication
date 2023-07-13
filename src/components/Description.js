import React, { Component } from "react";
import DescriptionInput from './DescriptionInput';

export default class Description extends Component {
	constructor() {
		super();

        this.state = {
            updating: false,
            description:  `This is where you enter your description. This can go up to 750 characters or approximately 110-190 words.\
            Use this space to give a general impression of where you are in your career path. For example, if you are a recent graduate\
            or have relevant practical experience. If you're a recent graduate, you can include relevant information about your degree.\
            If you are currently unemployed, you can mention your previous employment and educational attainment. I have now ran out of\
            sample text to put here. Stack Overflow is a question-and-answer website for programmers.\ 
            It was created in 2008 by Jeff Atwood and Joel Spolsky.`
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
                    <DescriptionInput
                    currentName={this.state.description}
                    changeName={this.changeDescription}
                    type="Description"
                    />
                ) : (
				    <p id="description" onClick={this.updateDescription}>
                        {this.state.description}
                    </p>
                )}
			</div>
		);
	}
}
