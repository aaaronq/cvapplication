import React, { Component } from "react";
import Input from "./Input";

export default class CourseName extends Component {
	constructor(props) {
		super(props);

		this.state = {
			course: "Course Name",
			updating: false,
		};

		this.updateCourse = this.updateCourse.bind(this);
		this.changeCourse = this.changeCourse.bind(this);
	}

	updateCourse() {
		this.setState({
			updating: true,
		});
	}

	changeCourse(name) {
		this.setState({
			course: name,
			updating: false,
		});
	}

	render() {
		return (
			<>
				{this.state.updating ? (
					<Input
						currentName={this.state.course}
						changeName={this.changeCourse}
						type="Course"
					/>
				) : (
					<p onClick={this.updateCourse}> {this.state.course} </p>
				)}
			</>
		);
	}
}
