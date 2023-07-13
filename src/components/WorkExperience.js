import React, { Component } from "react";
import Job from "./Job";
import uniqid from "uniqid";

export default class WorkExperience extends Component {
	constructor() {
		super();

		this.state = {
			jobs: [<Job key={uniqid()} />],
		};

		this.addJob = this.addJob.bind(this);
		this.deleteJob = this.deleteJob.bind(this);
	}

	addJob() {
        if (this.state.jobs.length >= 3) return;
		this.setState({
			jobs: [...this.state.jobs, <Job key={uniqid()} />],
		});
	}

	deleteJob() {
		if (this.state.jobs.length === 1) return;
		this.setState({
			jobs: this.state.jobs.slice(0, -1),
		});
	}

	render() {
		return (
			<div className="workExperience">
				<h4> Work Experience </h4>
				{this.state.jobs}
				<div className="buttons" data-html2canvas-ignore>
				    {this.state.jobs.length < 3 && (
						<button onClick={this.addJob}> Add </button>
					)}
					{this.state.jobs.length > 1 && (
						<button onClick={this.deleteJob}> Delete </button>
					)}
				</div>
			</div>
		);
	}
}
