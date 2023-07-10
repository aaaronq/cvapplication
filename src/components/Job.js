import React, { Component } from 'react';
import Date from "./Date";
import Position from "./Position";
import Company from "./Company";

export default class Job extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="job">
                <Date type="From"/>
                <Position/>
                <Date type="To"/>
                <Company/>
            </div>
        )
    }
}

