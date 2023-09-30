const CDN_URL =
"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const Rescard = (props)=>{
    const {resData} = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime
    } = resData?.info;
    return (
      <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200'>
         <img className = 'rounded-lg'
        alt = 'reslogo'
        src={ CDN_URL + cloudinaryImageId} />
         <h3 className="font-bold py-4 text-lg">{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating}</h4>
         <h4>{costForTwo}</h4>
         <h4>{deliveryTime}</h4>
      </div>
    );
  }
export default Rescard;  