// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import srv, { updateSnack } from "../fetch_";

// export default function Edit() {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const [snackToEdit, setSnackToEdit] = useState({
//         name: "",
//         fiber: 0,
//         protein: 0,
//         added_sugar: 0,
//         image: ""
//     });

//     useEffect(()=>{
//         srv.getOneSnack(id, data => {
//             setSnackToEdit(data);
//         });
//     }, [id])

//   return (<p>Lets edit!</p>);
// }

import { useEffect, useState } from "react";
import EditForm from "../Components/EditForm";
import srv, { updateSnack } from "../fetch_";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  // 1-. Implementar la carga de la informacion del snack a editar
  // 2-. Implementar el submit para actualizar la informacion del snack
  const { id } = useParams()

  const emptySnack = {
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    image: "",
  };

  const navigate = useNavigate();

  function on_save_snack(snack) {
    updateSnack(id, snack)
      .then(() => navigate('/'))
  }

  const [defaultValue, setDefaultValue] = useState(emptySnack)

  useEffect(() => {
    srv.getOneSnack(id, data => {
      setDefaultValue(data)
    })
  }, [id])

  return (
    <div>
      <div style={{ maxWidth: "640px", margin: "auto" }}>
        <EditForm default_value={defaultValue} upliftResult={on_save_snack} />
      </div>
    </div>
  );
}
