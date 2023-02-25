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
  const [isListPage, setIsListPage] = useState(false);
  const [shoesToAdd, setShoesToAdd] = useState({});
  const [shoesToEdit, setShoesToEdit] = useState([]);

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
    if (!shoesToAdd.imgUrl) return; // don't run the first time

    setIsLoading(true);
    async function addToDatabase() {
      try {
        await API.addShoe(shoesToAdd);
        const response = await API.getShoes();

        setShoes(response);
        setShoesIds(Object.keys(response));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    addToDatabase();
  }, [shoesToAdd]);

  useEffect(() => {
    if (!shoesToEdit[0]) return; // dont run the first time

    setIsLoading(true);
    async function addToDatabase() {
      try {
        await API.editShoe(shoesToEdit[0], shoesToEdit[1]);
        const response = await API.getShoes();

        setShoes(response);
        setShoesIds(Object.keys(response));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    addToDatabase();
  }, [shoesToEdit]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header setIsListPage={setIsListPage} />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/add-shoes",
          element: !isLoading && <AddShoes setShoesToAdd={setShoesToAdd} />,
        },

        {
          path: "/edit-shoes/:itemId",
          element: !isLoading && (
            <EditShoe
              shoesIds={shoesIds}
              shoes={shoes}
              setShoesToEdit={setShoesToEdit}
            />
          ),
        },

        {
          path: "/shoes-list",
          element: !isLoading && (
            <ShoesList
              isListPage={isListPage}
              setIsListPage={setIsListPage}
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
