import { Link } from "react-router-dom";
export default function NavBar(){
  return (
    <nav>
      <Link to="/" style={{margin:"0px 20px"}}>To Home</Link> | 
      <Link to="/new" style={{margin:"0px 20px"}}>New a Snack</Link>
     </nav>
  )
}