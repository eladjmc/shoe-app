import React from "react";
import ShoesForm from "../components/ShoesForm";

const AddShoes = ({ setShoesToAdd }) => {
  return (
    <section className="Add-Shoes">
      <ShoesForm
        descriptionCurrent={""}
        priceCurrent={""}
        imgUrlCurrent={""}
        itemId={""}
        isEdit={false}
        setShoesToAdd={setShoesToAdd}
      >
        <div className="title">Add Shoes</div>
      </ShoesForm>
    </section>
  );
};

export default AddShoes;
