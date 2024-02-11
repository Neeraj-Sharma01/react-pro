import RestaurentCard from "./RestaurentCard";
import {useState,useEffect} from "react"
import resList from "../utiles/monkData";
import Shimmer from "./Shimmer";
const Body = () => {
  //State Variable - Super Pwerful Variable
const [List,setList] = useState([]);
const [FilterList,setFilterList] = useState([]);

const [searchText,setSearchText] = useState("")

//it is use when component is rendering is compliete then it is call or render this code
useEffect(() => {
  fetchData()
},[])

const fetchData = async() => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json();
    console.log(json)
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilterList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
}

// if(List.length === 0)
// {
//   return <Shimmer/>
// } you can write this type of condition like next line


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
                    <RestaurentCard key={restaurent.info.id} resName={restaurent}/>
                ))}
            </div>
        </div>
    )
}

export default Body;