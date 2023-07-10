import React, { Component } from "react";
import Course from "./Course";	
import uniqid from "uniqid";

export default class WorkExperience extends Component {
	constructor() {
		super();

		this.state = {
			courses: [<Course key={uniqid()} />],
		};

		this.addCourse = this.addCourse.bind(this);
		this.deleteCourse = this.deleteCourse.bind(this);
	}

	addCourse() {
		if (this.state.courses.length >= 5) return;
		this.setState({
			courses: [...this.state.courses, <Course key={uniqid()} />],
		});
	}

	deleteCourse() {
		if (this.state.courses.length === 1) return;
		this.setState({
			courses: this.state.courses.slice(0, -1),
		});
	}

	render() {
		return (
			<div className="education">
				<h4> Education </h4>
				{this.state.courses}
				<div className="buttons">
					{this.state.courses.length < 5 && (
						<button onClick={this.addCourse}> Add </button>
					)}
					{this.state.courses.length > 1 && (
						<button onClick={this.deleteCourse}> Delete </button>
					)}
				</div>
			</div>
		);
	}
}
