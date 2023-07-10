import React, { Component } from 'react';
import Date from "./Date";
import CourseName from "./CourseName";
import University from "./University";

export default class Course extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="course">
                <Date type="From"/>
                <CourseName/>
                <Date type="To"/>
                <University/>
            </div>
        )
    }
}

