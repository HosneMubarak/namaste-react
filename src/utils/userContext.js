import { createContext } from "react";

const UserContext = createContext({ LoggedInUser: "Defaul Username" });
export default UserContext;
