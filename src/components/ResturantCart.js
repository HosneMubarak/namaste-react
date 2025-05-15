import { CDN_URL } from "../utils/constants";

const ResturantCart = (props) => {
  const { restObjList } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = restObjList;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
      <h4>38 min</h4>
    </div>
  );
};

export default ResturantCart;
