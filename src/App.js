import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import AddShoes from "./pages/AddShoes";
import ShoesList from "./pages/ShoesList";
import "./styles/App.css";
import API from "./utils/api";
import EditShoe from "./pages/EditShoe";

function App() {
  const [shoes, setShoes] = useState({});
  const [shoesIds, setShoesIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shoesToAdd, setShoesToAdd] = useState({});

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

  useEffect(() => {
    if (!shoesToAdd.imgUrl) return;

    setIsLoading(true);
    async function addToDatabase() {
      try {
        await API.addShoe(shoesToAdd);
        const response = await API.getShoes();

        setShoes(response);
        setShoesIds(Object.keys(response));
        console.log(Object.keys(response));
        setIsLoading(false);
        
      } catch (error) {
        console.error(error);
      }
    }
    addToDatabase();
  }, [shoesToAdd]);

  // const response = await API.getShoes();

  // setShoes(response);
  // setShoesIds(Object.keys(response));
  // console.log(Object.keys(response));
  // setIsLoading(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/add-shoes",
          element: !isLoading && <AddShoes setShoesToAdd={setShoesToAdd} />,
        },
        {
          path: "/edit-shoe/:itemId",
          element: !isLoading && (
            <EditShoe
              shoes={shoes}
              shoesIds={shoesIds}
              setShoesIds={setShoesIds}
            />
          ),
        },
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
