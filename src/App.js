import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResturantMenue from "./components/ResturantMenue";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const data = { username: "Hosne Mubarak" };
    setUserInfo(data.username);
    console.log(userInfo);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ LoggedInUser: userInfo, setUserInfo }}>
        <div className="h-full">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenue />,
      },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routerApp} />);
