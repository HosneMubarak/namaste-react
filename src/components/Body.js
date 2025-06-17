import ResturantCart, {
  promotedResturantCart,
} from "../components/ResturantCart";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { RES_LIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  // const [FilteredlistOfResturant, setFilteredlistOfResturant] = useState([]);
  const [listOfResturant, setlistOfResturant] = useState([]);
  const [listFilterOfResturant, setlistFilterOfResturant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const ResturantCartWithPromoted = promotedResturantCart(ResturantCart);
  const { LoggedInUser, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API);
    const json = await data.json();
    setlistOfResturant(json.data?.cards?.slice(3));
    setlistFilterOfResturant(json.data?.cards?.slice(3));
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return (
      <h1>Look like you're offline, Please check your internet connection.</h1>
    );
  }

  return listOfResturant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <input
          type="text"
          className="rounded border-solid border-black"
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="px-4 bg-green-400 m-4 rounded"
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
          className="bg-green-400 m-4 py-2 px-4 rounded"
          onClick={() => {
            const filterList = listOfResturant.filter(
              (res) => res.card.card.info.avgRating >= 4.6
            );
            setlistFilterOfResturant(filterList);
          }}
        >
          Top rated Resturant
        </button>
        <div className="p-4">
          <label htmlFor="">UserName: </label>
          <input
            type="text"
            className="border-solid border-black"
            value={LoggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {listFilterOfResturant.map((resturant) => (
          <Link
            key={resturant.card.card.info.id}
            to={"/resturant/" + resturant.card.card.info.id}
          >
            {resturant.card.card.info.promoted ? (
              <ResturantCartWithPromoted restObjList={resturant} />
            ) : (
              <ResturantCart restObjList={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
