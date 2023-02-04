import SnackForm from "../Components/snackForm";
import srv from '../fetch_';
import { useNavigate } from "react-router-dom";

export default function NewSnack(){
  const default_value = { name: "", fiber: 0, protein: 0, added_sugar: 0, image: "" };
  const navigate = useNavigate();
  
  function on_save_snack(snack){
    srv.createSnack(snack,(data)=>{
      // console.log(data);
      navigate("/");
    })
  }
  return <div>
    <div style={{maxWidth:"640px",margin:"auto"}}>
      <SnackForm default_value={default_value} upliftResult={on_save_snack} />
    </div>
  </div>  
}