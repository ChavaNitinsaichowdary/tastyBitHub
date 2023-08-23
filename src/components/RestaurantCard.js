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
    } = resData?.data;
    return (
      <div className='resCard' style={{backgroundColor : '#f0f0f0'}}>
         <img className = 'resLogo'
        alt = 'reslogo'
        src={ CDN_URL + cloudinaryImageId} />
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating}</h4>
         <h4>cost for two {costForTwo/100}</h4>
         <h4>{deliveryTime}</h4>
      </div>
    );
  }
export default Rescard;  