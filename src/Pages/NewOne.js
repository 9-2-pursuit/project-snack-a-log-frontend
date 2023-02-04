import { useEffect, useState } from "react";
import srv, { deleteSnack } from "../fetch_";
import { useParams, useNavigate } from "react-router-dom";

export default function NewOne() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [snack, setSnack] = useState({});

  useEffect(() => {
    srv.getOneSnack(id, (data) => {
      setSnack(data);
    });
  }, [id]);

  function deleteNow(id) {
  
    if (window.confirm("Are you sure you want to delete this snack?")) {
      deleteSnack(id).then((snackDeleted) => {
        navigate(`/`);
      }
      );
    }
}

  
  
  return (
    <div>
      <figure
        className="accent"
        style={{ "--mb": "1.5rem", "--translatey-hvr": "-10px" }}
      >
        <img src={snack.image} alt={snack.name} />
        <figcaption>
          <h4>{snack.name}</h4>

          <table>
            <tbody>
              <tr>
                <th scope="row">Fiber</th>
                <td>{snack.fiber}</td>
                <td>
                  <progress value={snack.fiber} max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </td>
              </tr>
              <tr>
                <th scope="row">Protein</th>
                <td>{snack.protein}</td>
                <td>
                  <progress value={snack.protein} max="100">
                    {" "}
                    32%{" "}
                  </progress>
                </td>
              </tr>
              <tr>
                <th scope="row">Sugar</th>
                <td>{snack.added_sugar}</td>
                <td>
                  <progress value={snack.added_sugar} max="100">
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
                <td>{snack.is_healthy ? "🟢" : "🔴"}</td>
              </tr>
            </tfoot>
          </table>
          <div className="group" style={{ "--x": "63" }}>
            <button
              onClick={() => navigate(`/${id}/edit`)}
              aria-label="Edit Button"
            >
              Edit
            </button>

            <button
              className="red"
              aria-label="Delete Button"
              onClick={() => deleteNow(id)}
            >
              Delete
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
