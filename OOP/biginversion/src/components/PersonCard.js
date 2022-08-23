import React, { Component } from 'react'

export default class PersonCard extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <h3>{this.props.lname} {this.props.fname}</h3>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.haircolor}</p>
            </div>
        )
    }
}

