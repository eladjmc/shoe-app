import React, { useState } from "react";
import API from "../utils/api";
import "../styles/ShoesForm.css";

const ShoesForm = ({
  descriptionCurrent,
  priceCurrent,
  imgUrlCurrent,
  onUpdate,
  itemId,
  isEdit,
  setShoesToAdd,
  children,
}) => {
  const [imgUrl, setImgUrl] = useState(imgUrlCurrent);
  const [description, setDescription] = useState(descriptionCurrent);
  const [price, setPrice] = useState(priceCurrent);

  const validateInputs = () => {
    const imgRegex = /\.(gif|jpe?g|png|webp)$/i;
    if (!imgUrl.match(imgRegex)) {
      alert("Invalid image URL");
      return false;
    }
    if (description === "") {
      alert("Description must not be empty");
      return false;
    }

    if (isNaN(price) || parseFloat(price) <= 0) {
      alert("Price must be a positive number");
      return false;
    }

    return true;
  };

  const editItem = async () => {
    const response = await API.editShoe({ imgUrl, description, price }, itemId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }
    if (isEdit) {
      editItem();
    } else {
      setShoesToAdd({ imgUrl, description, price });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
      <div className="input-container ic1">
        <input
          className="input"
          type="text"
          id="imgUrl"
          placeholder=" "
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <div className="cut"></div>
        <label className="placeholder">Image URL:</label>
      </div>

      <div className="input-container ic1">
        <input
          className="input"
          type="text"
          id="description"
          placeholder=" "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="cut"></div>
        <label className="placeholder">Description:</label>
      </div>

      <div className="input-container ic1">
        <input
          className="input"
          type="number"
          placeholder=" "
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="cut"></div>
        <label className="placeholder">Price:</label>
      </div>
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ShoesForm;
