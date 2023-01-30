import { useState } from "react";
export default function SnackForm({default_value,upliftResult}){
  const [snack, setSnack] = useState({...default_value});

  ///////////////////////////////////////////////
  function on_input_change(evt){
    let key = evt.currentTarget.name;
    let val = evt.currentTarget.value;
    setSnack(pv=>({...pv,[key]:val}));
  }
  function on_submit(evt){
    evt.preventDefault();
    upliftResult(snack);
  }
  ///////////////////////////////////////////////
  return <div className="code-block" style={{"--bg":"#f5f5f5","--radius":" 4px", "--p":"1rem", "--mb":"3rem", "--border-1":"var(--br-grey)","--fw":"bold"}}>
    <form onSubmit={on_submit}>
      <p><label>Name
        <input type="text" placeholder="e.g name" name="name" value={snack.name} onChange={on_input_change}/>
      </label></p>
      <p><label>Fiber        
        <input type="number" placeholder="e.g 23" name="fiber" value={snack.fiber} onChange={on_input_change}/>
      </label></p>
      <p><label>Protein        
        <input type="number" placeholder="e.g 35" name="protein" value={snack.protein} onChange={on_input_change}/>
      </label></p>
      <p><label>Added Sugar        
        <input type="number" placeholder="e.g 28" name="added_sugar" value={snack.added_sugar} onChange={on_input_change}/>
      </label></p>
      <p><label>Image URL        
        <input type="text" placeholder="http://" name="image" value={snack.image} onChange={on_input_change}/>
      </label></p>
      <img src={snack.image} alt=""/>
      <input type="submit"/>
    </form>
  </div>
}