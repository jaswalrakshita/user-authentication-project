import axios from 'axios';

const api = axios.create({
    basURL:'http://localhost:5000/api',
    headers:{
        'Content-Type': 'application/json',
    },
});

export default api;