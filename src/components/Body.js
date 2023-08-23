import resList from "../utils/mockdata";
import Rescard from "./RestaurantCard";
import { useState } from "react";
const Body = ()=>{
    const [restaurantList, setRestaurantList] = useState(resList);
    return (
    <div className='body'>
      <button 
      className='filter-btn'
      onClick={()=>{
         let filterList = restaurantList.filter(
              (res) => res.data.avgRating > 4.0  
         )
         console.log(filterList);
         setRestaurantList(filterList);
      }}>Top Rated Restaurants</button>
      <div className='resContianer'>
         { restaurantList?.map((restaurant) => (
            <Rescard key = {restaurant.data.id} resData = {restaurant} />
          ))}
      </div>
    </div>
    )
  }
  export default Body;