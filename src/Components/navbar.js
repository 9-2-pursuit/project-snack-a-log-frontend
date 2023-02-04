import { Link } from "react-router-dom";
export default function NavBar(){
  return (
    <div
      style={{
        "--cc": "1",
        "--cc-sm": "2",
        "--cc-xl": "3",
        "--cg": "1.5rem",
        // ESTE ES EL BACKGROUND
        "--bg": "#4A69BD",
        "--p": "1.5rem",
        "--pos": "relative",
      }}
    >
      <nav>
        <Link
          to="/"
          style={{
            margin: "0px 20px",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          To Home
        </Link>{" "}
        |
        <Link
          to="/new"
          style={{
            margin: "0px 20px",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          New a Snack
        </Link>
      </nav>
    </div>
  );
}