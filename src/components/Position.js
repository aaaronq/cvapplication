import React, { Component } from "react";
import Input from './Input'

export default class Position extends Component {
    constructor(props) {
        super(props)

        this.state = {
            position: "Position",
            updating: false,
        }

        this.updatePosition = this.updatePosition.bind(this);
        this.changePosition = this.changePosition.bind(this)
    }

    updatePosition() {
        this.setState({
            updating: true,
        })
    }

    changePosition(name) {
        this.setState({
            position: name,
            updating: false,
        })
    }

    render() {
        return (
            <>
                {this.state.updating ? (
                    <Input 
                    currentName={this.state.position} 
                    changeName={this.changePosition}
                    type="Position"/>
                ) : (
                    <p onClick={this.updatePosition}> {this.state.position} </p>
                )}
            </>
        )   
    }

}