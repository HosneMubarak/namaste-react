import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";
import { useContext } from "react";

const ResturantCart = (props) => {
  const { LoggedInUser } = useContext(UserContext);
  const { restObjList } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } =
    restObjList.card.card.info;
  return (
    <div className="m-4 p-4 w-56 rounded-lg hover:bg-slate-400">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
      <h4>38 min</h4>
      <h4>{LoggedInUser}</h4>
    </div>
  );
};

const promotedResturantCart = (ResturantCart) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <ResturantCart {...props} />
      </div>
    );
  };
};

export default ResturantCart;
export { promotedResturantCart };
