import { Provider } from "react-redux";
import "./App.css";
import Body from "./componants/Body";
import Head from "./componants/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./componants/MainContainer";
import WatchPage from "./componants/WatchPage";

import { useState } from "react";

import SearchVideoContainer from "./componants/SearchVideoContainer";
import MyContext from "./utils/searchTextContext";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "watch", element: <WatchPage /> },
    ],
  },
  {
    path: "/Search/:searchTerm",
    element: <SearchVideoContainer />,
  },
]);

function App() {
  const [text, setText] = useState("Home");
  console.log(text);

  return (
    <MyContext.Provider value={{ text, setText }}>
      <Provider store={store}>
        <div>
          <Head />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </MyContext.Provider>
  );
}

export default App;
