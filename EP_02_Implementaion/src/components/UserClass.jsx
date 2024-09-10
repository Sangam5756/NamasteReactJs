import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "Sangam",
                location: "Pune",
                avatar_url:"Dummy Photo"

            }
        }

    }

    async componentDidMount() {

        const response = await fetch("https://api.github.com/users/sangam5756");
        const data = await response.json();

        console.log(data)
        this.setState({
            userInfo: data
        })
    
    
    }



    componentWillUnmount(){
        console.log("Component is UnMounted")
    }

    render() {

        console.log(this.userInfo)
        const {name , location,bio,html_url, avatar_url,public_repos} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} alt="" />
                <h2>Name : {name}</h2>
                <h3>Profession : {bio}</h3>
                <h3>Location : {location}</h3>
                <h4>Contact: @sangam5756</h4>
                <h5>Total Repos: {public_repos}</h5>
                <button ><a href={html_url} target="_blank">View Github</a></button>
            </div>
        )
    } 
}

export default UserClass