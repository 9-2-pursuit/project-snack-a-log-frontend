import { useState, useEffect } from "react";
import axios from "axios";

import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

const Snacks = () => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => {
        console.log(response);
        setSnacks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Snacks">
      <div className="info">
        {snacks.map((snack) => {
          return <Snack key={snack.id} snack={snack} />;
        })}
      </div>
    </div>
  );
};

export default Snacks;
