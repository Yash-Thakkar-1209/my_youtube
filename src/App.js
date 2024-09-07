import { useState } from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watch from "./Components/Watch";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children : [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <Watch/>
    }
  ]
}])

const App = () => {

  return (
    <>
      <Header />
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
