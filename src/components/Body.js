import RestaurentCard from "./RestaurentCard";
import {useState,useEffect} from "react"
import resList from "../utiles/monkData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  //State Variable - Super Pwerful Variable
const [List,setList] = useState([]);
const [FilterList,setFilterList] = useState([]);

const [searchText,setSearchText] = useState("")

//when do not use dependencies array [] it run every render
//when we use default dependency array [] its call once when initial render page
//when we give dependencie array inside pass value like [btnClick] it only run when it value change
useEffect(() => {
  fetchData()
},[])

const fetchData = async() => {
       const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.585445&lng=73.712479&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json();
    console.log(json)
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilterList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
}




    return List.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
              <div className="search">
                  <input type="text" className="searchBox" value={searchText} onChange={(e) => {setSearchText(e.target.value) }}/>
                  <button className="btn-search" onClick={() => {
                    const data = List.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilterList(data)
                  }}>Search</button>
              </div>
              <button className="filter-btn" onClick={() => {
                const FilterdList = List.filter((res) => res.info.avgRating > 4);
                setList(FilterdList)
                console.log(List)
              }}>
              Top Rated Restaurent
              </button>
            </div>
            <div className="res-container">
                {FilterList.map((restaurent) => (
                  <Link key={restaurent.info.id} to={"/menu/"+restaurent.info.id}>
                    <RestaurentCard resName={restaurent}/>
                  </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;