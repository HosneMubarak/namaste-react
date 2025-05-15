import ResturantCart from "../components/ResturantCart";
import restObjList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfResturant, setlistOfResturant] = useState(restObjList);
  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            const filterList = listOfResturant.filter(
              (res) => res.avgRating > 4
            );
            setlistOfResturant(filterList);
          }}
        >
          Top rated Resturant
        </button>
      </div>
      <div className="res-container">
        {listOfResturant.map((resturant) => (
          <ResturantCart key={resturant.id} restObjList={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
