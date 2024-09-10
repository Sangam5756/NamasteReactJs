import React, { Component } from 'react'
import User from './User'
import UserClass from './UserClass'



class About extends Component {

    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Component Mount Successfull");
    }

    render() {

        console.log("Parent Render")

        return (
            <div>
                <h1>About</h1>
                <h2>This is React WebSeries</h2>
                <UserClass name={"Sangam Mundhe (Functional class)"} />

            </div>
        )
    }
}




export default About