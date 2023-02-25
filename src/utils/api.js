import axios from "axios";

const API = {
  shoes: axios.create({
    baseURL:
      "https://elad-shoe-default-rtdb.europe-west1.firebasedatabase.app/shoes",
  }),

  async removeShoes(id) {
    this.shoes
      .delete(`/${id}.json`)
      .then((response) => {
        return "Shoe Was Deleted!";
      })
      .catch((error) => {
        return "Error while deleting shoe";
      });
  },

  async getShoes() {
    try {
      const response = await this.shoes.get(".json");
      if (response.status !== 200) {
        console.error("cant get items from the api");
        return;
      }
      return response.data;
    } catch (error) {
      console.error("Error getting items", error);
    }
  },

  async addShoe(newItemData) {
    try {
      await this.shoes.post(".json", newItemData);
      console.log("Item added successfully");
      return;
    } catch (error) {
      console.error("Error adding item", error);
    }
  },

  async editShoe(updatedData, id) {
    this.shoes
      .patch(`/${id}.json`, updatedData)
      .then((response) => {
        return "Shoe updated successfully:";
      })
      .catch((error) => {
        console.error("Error updating shoe:", error);
      });
  },
};

export default API;
