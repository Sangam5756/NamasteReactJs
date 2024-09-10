import React, { Component } from 'react'
import User from './User'
import UserClass from './UserClass'



class About extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.time = setInterval(()=>{
            console.log("BhaiLog")
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.time)

    }

    render() {

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