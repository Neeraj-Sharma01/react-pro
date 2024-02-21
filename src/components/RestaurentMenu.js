import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { MENU_LINK } from "../utiles/constants";


const RestaurentMenu = () => {
    const[menuList,SetMenuList] = useState([]);
    const {rid}= useParams()

    console.log(rid);

    useEffect(async () => {
        const data = await fetch(MENU_LINK + rid)

        const json = await data.json();

        console.log(json);


        SetMenuList( json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
            );

    },[])


    return (
        <div>
        {menuList.map((res) => {
            return (
                <div className="container2">

                <div className="container1">

                <div className="head">{res.card.info.name}
                <br/>
                {res.card.info.price/100}
                <br/>
                <button className="btn">Add+</button>
                </div>

                <div className="imgcontainer">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+res.card.info.imageId}/>
                <br/>
                </div>

                </div>

                </div>
            )
        })}
        </div>
    )
}

export default RestaurentMenu