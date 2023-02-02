import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar">
      <h1 className="text-center header">Snacks App</h1>
      <Nav fill>
        <Nav.Item>
            <Link to={`/snacks`}>All Snacks</Link>
        </Nav.Item>
        <Nav.Item>
          <Button variant="outline-info" className="new-button">
            <Link to={`/snacks/new`}>Add A New Snack</Link>
          </Button>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;
