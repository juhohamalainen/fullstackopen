import axios from "axios";
const baseUrl = "http://localhost:3001/contacts";


const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = contactObject => {
  const request = axios.post(baseUrl, contactObject);
  return request.then(response => response.data);
};

const update = (id, contactObject) => {
  const request = axios.put(`${baseUrl}/${id}`, contactObject);
  return request.then(response => response.data);
};

const deleteContact = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => response.data);
};

export default {
  getAll,
  create,
  update,
  deleteContact
};