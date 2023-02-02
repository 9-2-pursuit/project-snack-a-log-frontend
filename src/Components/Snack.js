import React from "react";
import { Link } from "react-router-dom";
const Snack = ({ snack }) => {
  return (
    <div className="snack-card">
      <Link to={`/snacks/${snack.id}`}>
        <img src={snack.image} alt={`${snack.name} img`} width="150px" />
      </Link>
      <br />
      <div className="name-and-health">
        <br />
        <h6> {snack.name} </h6>{" "}
        <span> {snack.is_healthy ? <span>❤️</span> : <span> ♡ </span>}</span>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Snack;
