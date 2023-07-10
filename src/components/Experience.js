import React, { Component } from "react";
import '../Experience.css';
import Description from "./Description";
import WorkExperience from "./WorkExperience"
import Education from "./Education"

export default class Experience extends Component {
	constructor() {
		super();
	}

	render() {
        return (
            <div className="experience">
                <Description/>
                <WorkExperience/>
                <Education/>
            </div>
        )
    }
}