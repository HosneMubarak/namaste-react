import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router";
import useResturantMenue from "../utils/useResturantMenue";
import ResturantCategory from "./ResturantCategory";

const ResturantMenue = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenue(resId);
  const [showIndex, setShowIndex] = useState(null);
  const category =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="p-4 m-4">
      <h1 className="font-bold text-2xl text-center">
        {resInfo.data?.cards[2]?.card?.card?.info?.name}
      </h1>
      <h2 className="font-bold text-center">
        {resInfo.data?.cards[2]?.card?.card?.info?.cuisines?.join()}
      </h2>
      {category.map((c, index) => (
        <ResturantCategory
          data={c?.card?.card}
          key={c?.card?.card?.categoryId}
          showItem={showIndex == index ? true : false}
          setShowIndex={() => setShowIndex(showIndex == index ? null : index)}
        />
      ))}
    </div>
  );
};
export default ResturantMenue;
