import ResturantCart from "../components/ResturantCart";
import restObjList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // const [FilteredlistOfResturant, setFilteredlistOfResturant] = useState([]);
  const [listOfResturant, setlistOfResturant] = useState([]);
  const [listFilterOfResturant, setlistFilterOfResturant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=80455&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
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
          <ResturantCart
            key={resturant.card.card.info.id}
            restObjList={resturant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
