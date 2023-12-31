import axios from "axios";

const REST_API_BASE_URL= 'http://localhost:8080/users';

export const listUsers=()=>{return axios.get(REST_API_BASE_URL);}

export const createUser=(user)=>axios.post(REST_API_BASE_URL,user);


// export const getUser=(userId)=>axios.get(REST_API_BASE_URL + '/' + userId);
export const getUser = (userId) => axios.get(`http://localhost:8080/users/${userId}`);

export const updateUser=(userId,user)=>axios.put(REST_API_BASE_URL+ '/' + userId, user);

export const deleteUser=(userId)=>axios.delete(REST_API_BASE_URL+ '/' + userId);
