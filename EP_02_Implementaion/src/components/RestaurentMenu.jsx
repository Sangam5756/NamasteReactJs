import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {

    const [resInfo, setResinfo] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetchData();
    }, [id]);


    const fetchData = async () => {
        const response = await fetch("https://mocki.io/v1/20f87c98-d65e-4235-878c-4260b4d65191")
        const data = await response.json();

        const filterdata = data.filter((res => res.restaurantId === id));
        setResinfo(filterdata)
    }
    console.log(resInfo)


    return (
        <div>

            <h1>{resInfo[0]?.name}</h1>
            <p>{resInfo[0]?.costForTwo}</p>
            <h1>menu</h1>

            {resInfo[0]?.menu.map(res => (
                <div>
                    <p>{res.dishName} = {res.price}</p>
                </div>


            ))}


        </div>
    )
}

export default RestaurentMenu