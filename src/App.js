import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import AddShoes from "./pages/AddShoes";
import ShoesList from "./pages/ShoesList";
import "./styles/App.css";
import API from "./utils/api";

function App() {
  const [shoes, setShoes] = useState({});
  const [shoesIds, setShoesIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // define an async function to retrieve the shoes data from the API
    async function fetchShoes() {
      try {
        setIsLoading(true);
        const response = await API.getShoes();
        // use the setShoes function to update the state with the retrieved data
        setShoes(response);
        setShoesIds(Object.keys(response));
        setIsLoading(false);
      } catch (error) {
        console.error("Error retrieving shoes:", error);
      }
    }
    fetchShoes();
  }, []); // run this effect only once on component mount

  useEffect(() => {
    setShoesIds(Object.keys(shoes));
  }, [shoes]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/add-shoes", element: !isLoading && <AddShoes /> },
        {
          path: "/shoes-list",
          element: !isLoading && (
            <ShoesList
              shoesIds={shoesIds}
              setShoesIds={setShoesIds}
              shoes={shoes}
              isLoading={isLoading}
            />
          ),
        },
        { path: "/*", element: <Home /> }, // need to make no such page category
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
