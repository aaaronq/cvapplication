import React, { Component } from "react";
import Input from './Input'

export default class Company extends Component {
    constructor(props) {
        super(props)

        this.state = {
            company: "Company",
            updating: false,
        }

        this.updateCompany = this.updateCompany.bind(this);
        this.changeCompany = this.changeCompany.bind(this)
    }

    updateCompany() {
        this.setState({
            updating: true,
        })
    }

    changeCompany(name) {
        this.setState({
            company: name,
            updating: false,
        })
    }

    render() {
        return (
            <>
                {this.state.updating ? (
                    <Input 
                    currentName={this.state.company} 
                    changeName={this.changeCompany}
                    type="Company"/>
                ) : (
                    <p onClick={this.updateCompany}> {this.state.company} </p>
                )}
            </>
        )   
    }

}