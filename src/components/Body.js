import Shimmer from "./Shimmer";
import Rescard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Body = ()=>{
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchtext, setSearchtext] = useState("");
    const [filterlist, setFilterlist] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //optional chaining
        setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterlist(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    //conditional rendering
    // if (restaurantList.length === 0) {
    //     return <Shimmer/> ;
    // }
    return restaurantList?.length === 0 ? <Shimmer/> : (
    <div className='body'>
      <div className="filter">
      <div className="search">
          <input type="text" className="search-button" value = {searchtext} 
             onChange = {(e)=>{
             setSearchtext(e.target.value);
          }}/>
          <button
   onClick={() => {
      const filteredList = restaurantList?.filter(res => res?.info?.name.toLowerCase().includes(searchtext.toLowerCase()));
      setFilterlist(filteredList);
   }}
>
   Search
</button>

      </div>
     
      <button
   className="filter-btn"
   onClick={() => {
      const topRatedList = restaurantList.filter(res => res.info.avgRating > 4.0);
      setFilterlist(topRatedList);
   }}
>
   Show Top Rated Restaurants
</button>

      </div>
      <div className='resContianer'>
         { filterlist?.map((restaurant) => (
           <Link key = {restaurant.info.id}to = {"restaurant/"+restaurant.info.id}> <Rescard  resData = {restaurant} /></Link>
          ))}
      </div>
    </div>
    )
  }
  export default Body;