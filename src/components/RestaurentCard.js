import { CDN_LINK } from "../utiles/constants";
const RestaurentCard = (props) => {
    const text = props.resName.info.name;
    const costForTwo = props.resName.info.costForTwo;
    const avgRating = props.resName.info.avgRating;
    const deliveryTime = props.resName.info.sla.deliveryTime;
    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
        <img className="res-logo" src={CDN_LINK+ props.resName.info.cloudinaryImageId} alt="Not found"/>
                <h4>{text}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating}</h4>
                <h4>{deliveryTime}minutes</h4>
        </div>
    )
}

export default RestaurentCard;