import React, { Component } from "react";
import DescriptionInput from './DescriptionInput';

export default class Description extends Component {
	constructor() {
		super();

        this.state = {
            updating: false,
            description: "In this episode, I explain the biology of breathing (respiration), how it delivers oxygen and carbon dioxide to the cells and tissues of the body and how is best to breathe—nose versus mouth, fast versus slow, deliberately versus reflexively, etc., depending on your health and performance needs. I discuss the positive benefits of breathing properly for mood, to reduce psychological and physiological stress, to halt sleep apnea, and improve facial aesthetics and immune system function. I also compare what is known about the effects and effectiveness of different breathing techniques, including physiological sighs, box breathing and cyclic hyperventilation, “Wim Hof Method,” Prānāyāma yogic breathing and more. "
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
				    <p onClick={this.updateDescription}>
                        {this.state.description}
                    </p>
                )}
			</div>
		);
	}
}
