import { CDN_URL } from "../utils/constants";

const ResturantCart = (props) => {
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
    </div>
  );
};

export default ResturantCart;
