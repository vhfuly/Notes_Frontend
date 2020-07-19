import axios from 'axios';


const Api = axios.create({baseURL: process.env.REACT_APP_BASE_API})

//const Api = axios.create({baseURL:'http://localhost:3001'})


export default Api;