import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SnackNewForm = () => {
  const navigate = useNavigate();

  const [protein, setProtein] = useState("");

  const [name, setName] = useState("");

  const [fiber, setFiber] = useState("");

  const [image, setImage] = useState("");

  const [sugar, setSugar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3333/snacks", {
        fiber,
        name,
        protein,
        added_sugar,
        is_healthy,
        image,
      })
      .then(function (response) {
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
        <label for="protein">Protein</label>
        <input
          onChange={(e) => setProtein(e.target.value)}
          id="protein"
          name="protein"
          type="number"
          value={protein}
        />

        <label for="item_name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          id="item_name"
          name="item_name"
          type="text"
          value={item_name}
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
          id="sugar"
          name="sugar"
          type="number"
          value={sugar}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SnackNewForm;
