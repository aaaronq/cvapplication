import React, {Component} from 'react';

export default class DateInput extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let date = e.target[0].value;
        if (!Date.parse(date)) date = this.props.type;
        this.props.changeDate(date);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="date" className="dateInput" data-html2canvas-ignore/>
                <button type="submit" className="submitBtn" data-html2canvas-ignore>Submit</button>
            </form>
        )
    }
}