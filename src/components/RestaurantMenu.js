import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = ()=>{
    
  const {resId} = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>{itemCards?.map((item)=><li> {item.card.info.name}</li>)}</ul>


        </div>
    );
}

export default RestaurantMenu;