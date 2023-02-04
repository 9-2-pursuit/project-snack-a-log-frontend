import { useEffect, useState } from "react";
import srv, { deleteSnack } from "../fetch_";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    srv.getAllSnacks((data) => {
      console.log(data);
      if (Array.isArray(data)) setSnacks(data);
    });
  }, []);

  function deleteNow(id) {

      // Una vez la eliminación del recurso en el back es exitosa, actualizamos el estado del frontend
      // Para actualizar el estado, filtramos TODOS aquellos snacks cuyo id es DIFERENTE al del snack que acabamos de eliminar
      // Finalmente actualizamos el estado
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteSnack(id).then((snackDeleted) => {
        const updatedSnacks = snacks.filter((el) => el.id !== id);
        setSnacks(updatedSnacks); }
     ) }

  }

  return (
    <div>
      <div
        style={{
          "--cc": "1",
          "--cc-sm": "2",
          "--cc-xl": "3",
          "--cg": "1.5rem",
          // ESTE ES EL BACKGROUND
          backgroundImage: "url(https://media.istockphoto.com/id/1198380802/vector/food-background-vegetables-seamless-pattern-healthy-eating-tomato-garlic-carrot-pepper.jpg?s=612x612&w=is&k=20&c=dXnAh9SOI_kOkYeb42fwEpbyvb0f1cbAlCUOh0f5i-0=)",
          "--p": "1.5rem",
          "--pos": "relative",
        }}
      >
        {snacks.map((el, idx) => (
          <div key={idx}>
            <figure
              className="accent"
              style={{ "--mb": "1.5rem", "--translatey-hvr": "-10px" }}
            >
              <img src={el.image} alt={el.name} style={{ width: "310px" }} />
              <figcaption>
                <Link to={`/${el.id}`}>
                  <h4>{el.name}</h4>
                </Link>
                <table>
                  <tbody>
                    <tr>
                      <th scope="row">Fiber</th>
                      <td>{el.fiber}</td>
                      <td>
                        <progress value={el.fiber} max="100">
                          {" "}
                          32%{" "}
                        </progress>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Protein</th>
                      <td>{el.protein}</td>
                      <td>
                        <progress value={el.protein} max="100">
                          {" "}
                          32%{" "}
                        </progress>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Sugar</th>
                      <td>{el.added_sugar}</td>
                      <td>
                        <progress value={el.added_sugar} max="100">
                          {" "}
                          32%{" "}
                        </progress>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">is healthy</th>
                      <td></td>
                      <td>{el.is_healthy ? "🟢" : "🔴"}</td>
                    </tr>
                  </tfoot>
                </table>
                <div className="group" style={{ "--x": "63" }}>
                  <button
                    onClick={() => navigate(`/${el.id}/edit`)}
                    aria-label="Edit Button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteNow(el.id)}
                    className="red"
                    aria-label="Delete Button"
                  >
                    Delete
                  </button>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
