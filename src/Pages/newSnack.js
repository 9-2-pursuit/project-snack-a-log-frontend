import SnackForm from "../Components/snackForm";
import srv from '../fetch_';
export default function NewSnack(){
  const default_value = {name:"",fiber:0,protein:0,added_sugar:0,image:""};
  function on_save_snack(snack){
    srv.createSnack(snack,(data)=>{
      console.log(data);
    })
  }
  return <div>
    <div style={{maxWidth:"640px",margin:"auto"}}>
      <SnackForm default_value={default_value} upliftResult={on_save_snack} />
    </div>
  </div>  
}