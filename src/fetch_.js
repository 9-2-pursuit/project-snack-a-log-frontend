const API = process.env.REACT_APP_API_URL;
let default_fetch_options = {"Access-Control-Allow-Origin":"*"};
function error_handle (error){
  console.log(error);
}


function getAllSnacks(callback){
  console.log(API)
  fetch(`${API}/`,default_fetch_options)
    .then(response=>response.json())
    .then(data=>{callback(data)})
    .catch(error_handle);
}

function createSnack(body,cb)//post
{
  let options = {
    ...default_fetch_options,
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(`${API}`,options)
    .then(response=>response.json())
    .then(data=>{cb(data)})
    .catch(error_handle);
}

const fh = {getAllSnacks,createSnack}
export default fh;