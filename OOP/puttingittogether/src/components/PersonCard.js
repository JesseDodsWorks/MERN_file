import React, { Component } from 'react'

export default class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    render() {
        return (
            <div>
                <h3>{this.props.lname} {this.props.fname}</h3>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.haircolor}</p>
                <button onClick={ () => { this.setState({ age: this.state.age+1 }) }}> Birthday button for {this.props.fname} </button>
            </div>
        )
    }
}

