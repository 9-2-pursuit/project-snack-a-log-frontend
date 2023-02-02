import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const SnackNewForm = () => {
  const navigate = useNavigate();

  const [protein, setProtein] = useState("");

  const [name, setName] = useState("");

  const [fiber, setFiber] = useState("");

  const [image, setImage] = useState("");

  const [added_sugar, setSugar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${API}/snacks`, {
        fiber,
        name,
        protein,
        added_sugar,
        image,
      })
      .then(() => {
        navigate("/snacks");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <h3>Add a New Snack</h3>

      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
          type="text"
          value={name}
        />

        <label for="protein">Protein</label>
        <input
          onChange={(e) => setProtein(e.target.value)}
          id="protein"
          name="protein"
          type="number"
          value={protein}
        />

        <label for="Fiber">Fiber</label>
        <input
          onChange={(e) => setFiber(e.target.value)}
          id="fiber"
          name="fiber"
          type="number"
          value={fiber}
        />

        <label for="image">Image</label>
        <input
          onChange={(e) => setImage(e.target.value)}
          id="image"
          name="image"
          type="text"
          value={image}
        />

        <label for="sugar">Sugar</label>
        <input
          onChange={(e) => setSugar(e.target.value)}
          id="added_sugar"
          name="added_sugar"
          type="number"
          value={added_sugar}
        />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SnackNewForm;
