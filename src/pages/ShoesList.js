import React, { useEffect } from "react";
import ItemCard from "../components/ItemCard";

const ShoesList = ({
  shoesIds,
  shoes,
  isLoading,
  setShoesIds,
  isListPage,
  setIsListPage,
}) => {
  
  useEffect(() => {
    setIsListPage(true);
  
    return () => {
      setIsListPage(false);
    }
  },)
  
  return (
    <>
      <h1 className="shoes-list-title">Shoes Collection</h1>
      {!isLoading && isListPage && (
        <div className="shoe-list">
          {shoesIds.map((id) => {
            return (
              <ItemCard
                key={id}
                item={shoes[id]}
                id={id}
                shoesIds={shoesIds}
                setShoesIds={setShoesIds}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default ShoesList;
