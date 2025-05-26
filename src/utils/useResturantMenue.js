import { useEffect, useState } from "react";
import { MANUE_API_URL } from "../utils/constants";

const useResturantMenue = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MANUE_API_URL + resId);
    const resData = await data.json();
    setResInfo(resData);
  };
  return resInfo;
};
export default useResturantMenue;
