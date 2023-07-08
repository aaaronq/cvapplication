import React, { Component } from "react";
import Input from './Input'

export default class Profession extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profession: "Student",
            updating: false,
        }

        this.updateProfession = this.updateProfession.bind(this);
        this.changeProfession = this.changeProfession.bind(this)
    }

    updateProfession() {
        this.setState({
            updating: true,
        })
    }

    changeProfession(name) {
        this.setState({
            profession: name,
            updating: false,
        })
    }

    render() {
        return (
            <>
                {this.state.updating ? (
                    <Input 
                    currentName={this.state.profession} 
                    changeName={this.changeProfession}
                    type="Profession"/>
                ) : (
                    <h2 onClick={this.updateProfession}> {this.state.profession} </h2>
                )}
            </>
        )   
    }

}