import axios from "axios";
import authHeader from "../../services/auth-header";

const API_URL = "http://localhost:8080/api/admin/";


class AdminDataService {
  getAll() {
    return axios.get(API_URL + 'admins' , { headers: authHeader() } )}

  get(id) {
    return axios.get(API_URL + 'admins/{id}');
  }

  create(data) {
    return axios.post(API_URL + 'addadmins', data,  { headers: authHeader() });
  }

  update(id, data) {
    return axios.put(API_URL + 'admins/{id}', data, { headers: authHeader() });
  }

  delete(id) {
    return axios.delete( API_URL + 'admins/{id}', { headers: authHeader() } );
  }

  deleteAll() {
    return axios.delete( API_URL + 'admins', { headers: authHeader() });
  }

  findByName(name) {
    return axios.get(API_URL+`admins?name=$:{name}` ,{ headers: authHeader() });
  }
}

export default  new AdminDataService();