import axios from 'axios'


const http = axios.create({
    baseURL: 'http://www.liulongbin.top:3005/api/',
    headers: {'Content-Type': 'application/json'}
});


export default http