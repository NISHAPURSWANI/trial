
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://trello-clone-123.herokuapp.com',
    headers: {'Authorization': 'token'},
  })
  if((
  axios.defaults.headers.common['Authorization'] = localStorage.token)){
  this.$router.push({ name: "Board" });
  }
  else{
    delete axios.defaults.headers.common['Authorization']
    localStorage.removeItem('token'),
    this.$router.push({ name: "Login" });


  }
  export default instance;