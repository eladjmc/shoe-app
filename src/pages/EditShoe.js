import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ShoesForm from "../components/ShoesForm";
import { useNavigate } from "react-router-dom";

const EditShoe = ({ setShoesToEdit, shoes, shoesIds }) => {
  const { itemId } = useParams();

  const navigate = useNavigate();

  const isShoesExist = () => {
    return shoesIds.includes(itemId);
  };

  useEffect(() => {
    if (shoesIds.length) {
      if (!isShoesExist()) {
        navigate("/shoes-list");
      }
    }
  }, [shoesIds, shoes]);

  return (
    <section className="Add-Shoes">
      <ShoesForm
        descriptionCurrent={shoes[itemId]?.description}
        priceCurrent={shoes[itemId]?.price}
        imgUrlCurrent={shoes[itemId]?.imgUrl}
        itemId={itemId}
        isEdit={true}
        setShoesToAdd={setShoesToEdit}
      >
        <div className="title">Edit Shoes</div>
      </ShoesForm>
    </section>
  );
};

export default EditShoe;
