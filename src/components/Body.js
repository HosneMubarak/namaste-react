import ResturantCart from "../components/ResturantCart";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { RES_LIST_API } from "../utils/constants";

const Body = () => {
  // const [FilteredlistOfResturant, setFilteredlistOfResturant] = useState([]);
  const [listOfResturant, setlistOfResturant] = useState([]);
  const [listFilterOfResturant, setlistFilterOfResturant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API);
    const json = await data.json();
    console.log(json.data.cards.slice(3));
    setlistOfResturant(json.data?.cards?.slice(3));
    setlistFilterOfResturant(json.data?.cards?.slice(3));
  };

  return listOfResturant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log(searchText);
            const filtedResturents = listOfResturant.filter((res) =>
              res.card.card.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setlistFilterOfResturant(filtedResturents);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const filterList = listOfResturant.filter(
              (res) => res.card.card.info.avgRating >= 4.6
            );
            setlistFilterOfResturant(filterList);
          }}
        >
          Top rated Resturant
        </button>
      </div>
      <div className="res-container">
        {listFilterOfResturant.map((resturant) => (
          <Link
            key={resturant.card.card.info.id}
            to={"/resturant/" + resturant.card.card.info.id}
          >
            <ResturantCart restObjList={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
