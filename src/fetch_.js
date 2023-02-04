const API = process.env.REACT_APP_API_URL;
let default_fetch_options = { "Access-Control-Allow-Origin": "*" };

function error_handle(error) {
  console.log(error);
}

function getAllSnacks(callback) {
  console.log(API);
  fetch(`${API}/`, default_fetch_options)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch(error_handle);
}

function getOneSnack(id, callback) {
  fetch(`${API}/${id}`, default_fetch_options)
    .then((response) => response.json())
    .then((finalItem) => callback(finalItem))
    .catch(error_handle);
}

export function deleteSnack(id) {
  const request = fetch(`${API}/${id}`, {
    default_fetch_options,
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((snackDeleted) => snackDeleted)
    .catch((error) => console.log("Error deleting"));
  return request;
}

function createSnack(body, cb) {
  //post
  let options = {
    ...default_fetch_options,
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(`${API}`, options)
    .then((response) => response.json())
    .then((data) => {
      cb(data);
    })
    .catch(error_handle);
}

export function updateSnack(id, snack) {
  const request = fetch(`${API}/${id}`, {
    method: "PUT",
    body: JSON.stringify(snack),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((snackUpdated) => snackUpdated)
    .catch((err) => console.log("Error updating"));

  return request;
}

const fh = { getAllSnacks, createSnack, getOneSnack };
export default fh;
