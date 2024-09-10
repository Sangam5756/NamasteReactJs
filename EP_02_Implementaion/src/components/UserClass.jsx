import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        console.log(" Child Constructor is Called")

    }

    componentDidMount(){
        console.log("Child Component Mount Successfull")
    }


    render() {
        const { count } = this.state;
        console.log("Child Render is Called")

        return (
            <div className="user-card">
                <h2>Name : {this.props.name}</h2>
                <h2>Count : {count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}
                >Increase Count</button>
                <h3>Location: Pune</h3>
                <h4>Contact: @sangam5756</h4>
            </div>
        )
    }
}

export default UserClass