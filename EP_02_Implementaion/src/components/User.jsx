import { useEffect, useState } from "react";

const User = ({ name }) => {



    useEffect(() => {

        // console.log("UseEffect is called");

        const timer = setInterval(() => {
            console.log("This is UseEffection Interval");
        }, 1000);

        return ()=>{
            clearInterval(timer)
        }

    }, [])


    const [count] = useState(0)
    return (
        <div className="user-card">

            <h2>Name : {name}</h2>
            <h2>Count: {count}</h2>
            <h3>Location : Pune</h3>
            <h4>Contact : @sangam5756</h4>
        </div>
    )

}

export default User;