import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props)


        this.state = {
            count : 0,
            count2:1
        }

    }


    render() {
        const { count ,count2} = this.state;
        return (
            <div className="user-card">
                <h2>Name : {this.props.name}</h2>
                <h2>Count : {count2}</h2>
                <h2>Count2 : {count}</h2>
                <h3>Location: Pune</h3>
                <h4>Contact: @sangam5756</h4>


            </div>
        )
    }
}

export default UserClass