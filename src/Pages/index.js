import { useEffect, useState } from "react"
import srv from '../fetch_';
export default function Index(){
  const [snacks, setSnacks] = useState([]);
  useEffect(()=>{
    srv.getAllSnacks((data)=>{
      console.log(data);
      if(Array.isArray(data)) setSnacks(data);
    })
  },[])
  return (
    <div>
      <div style={{"--cc":"1","--cc-sm":"2", "--cc-xl":"3", "--cg":"1.5rem" ,"--bg":"#eee", "--p":"1.5rem", "--pos":"relative"}}>
        {snacks.map((el,idx)=><div key={idx}>
          <figure className="accent" style={{"--mb":"1.5rem","--translatey-hvr":"-10px"}}>
            <img src={el.image} alt={el.name}/>
            <figcaption>
              <h4>{el.name}</h4>
              <table>
                <tbody>
                  <tr>
                    <th scope="row">Fiber</th>
                    <td>{el.fiber}</td>
                    <td><progress value={el.fiber} max="100"> 32% </progress></td>
                  </tr>
                  <tr>
                    <th scope="row">Protein</th>
                    <td>{el.protein}</td>
                    <td><progress value={el.protein} max="100"> 32% </progress></td>
                  </tr>
                  <tr>
                    <th scope="row">Sugar</th>
                    <td>{el.added_sugar}</td>
                    <td><progress value={el.added_sugar} max="100"> 32% </progress></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">is healthy</th>
                    <td></td>
                    <td>{el.is_healthy?"🟢":"🔴"}</td>
                  </tr>
                </tfoot>
              </table>
              <div className="group" style={{"--x":"63"}}>
                <button aria-label="Edit Button">Edit</button>
                <button className="red" aria-label="Delete Button">Delete</button>
              </div>
            </figcaption>
          </figure>
        </div>)}
      </div>
    </div>
  )
}