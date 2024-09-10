import { useState } from "react";

const User = ({name})=>{
    const [count] = useState(0)
    return(
        <div className="user-card">

            <h2>Name : {name}</h2>
            <h2>Count: {count}</h2>
            <h3>Location : Pune</h3>
            <h4>Contact : @sangam5756</h4>
        </div>
    )

}

export default User;