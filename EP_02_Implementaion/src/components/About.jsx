import React, { Component } from 'react'
import User from './User'
import UserClass from './UserClass'



class About extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    componentWillUnmount(){
        

    }

    render() {

        return (
            <div>
                <h1>About</h1>
                <h2>This is React WebSeries</h2>
                {/* <UserClass name={"Sangam Mundhe (Functional class)"} /> */}
                <User/>

            </div>
        )
    }
}




export default About