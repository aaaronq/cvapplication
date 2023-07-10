import React, { Component } from "react";
import DateInput from "./DateInput"

export default class Date extends Component {
	constructor(props) {
		super(props);
        
        this.state = {
            updating: false,
            date: this.props.type,
        }

        this.updateDate = this.updateDate.bind(this);
        this.changeDate = this.changeDate.bind(this);
	}

    updateDate() {
        this.setState({
            updating: true
        })
    }

    changeDate(date) {
        this.setState({
            updating: false,
            date: date
        })
    }

	render() {
		return (
            <>
                {this.state.updating ? (
                    <DateInput changeDate={this.changeDate} type={this.props.type}/>
                ) : (
                    <p onClick={this.updateDate}> {this.state.date} </p>
                )}
            </>
        );
	}
}
