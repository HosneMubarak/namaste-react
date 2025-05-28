import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantMenue from "../utils/useResturantMenue";

const ResturantMenue = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenue(resId);

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="p-4 m-4">
      <h1 className="font-bold text-lg">
        {resInfo.data?.cards[2]?.card?.card?.info?.name}
      </h1>
      <h2 className="font-bold">
        {resInfo.data.cards[2].card.card.info.cuisines.join()}
      </h2>
      <h1 className="font-bold">Menue:</h1>
      <ul>
        {resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
          (item) => (
            <li className="text-ellipsis" key={item?.card?.info?.id}>
              {item?.card?.info?.name} - Rs.{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default ResturantMenue;
