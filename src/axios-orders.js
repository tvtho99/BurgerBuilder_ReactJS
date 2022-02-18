import axios from "axios";

const instance = axios.create({
  baseURL: 'https://reactjs-my-burger-a2fe6-default-rtdb.asia-southeast1.firebasedatabase.app'
})

export default instance