import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import heart_solid from "../assets/heart-solid.png";
import heart_outline from "../assets/heart-regular.png";
import ConfirmDelete from "./DeleteConfirmation";

const API = process.env.REACT_APP_API_URL;

const SnackDetails = () => {
  const [snack, setSnack] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { name, fiber, protein, added_sugar, is_healthy, image } = snack;
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        console.log(res.data);
        setSnack(res.data);
      })
      .catch((c) => console.error("catch", c));
  }, [id]);

  const goBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="card-body text-center">
      <article>
        <h3>
          {name}{" "}
          <img
            src={is_healthy ? heart_solid : heart_outline}
            height="20px"
            width="20px"
            alt="healthy-unhealthy"
          />
        </h3>
        <br />
        <img src={image} alt={name} height="200px" width="200px" />
        <br />
        <br />
        <container className="container">
          <h4>Fiber: {fiber}</h4>
          <h4>Protein: {protein}</h4>
          <h4>Added Sugar: {added_sugar}</h4>
        </container>

        <div className="d-flex-show-buttons">
          <div>
            <button className="btn btn-dark" onClick={goBack}>
              Back
            </button>
          </div>
          <div>
            <Link to={`/snacks/${id}/edit`}>
              <button className="btn btn-warning">Edit</button>
            </Link>
          </div>
          <div>
            <ConfirmDelete
              id={id}
              navigate={navigate}
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default SnackDetails;
