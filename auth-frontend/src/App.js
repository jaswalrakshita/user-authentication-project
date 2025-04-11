import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import api from './services/api';



function App() {
//hellooooooooo
  useEffect(()=>{
    //example to get api request
    api.get('/auth').then(response =>{
      console.log('api reasponse:', response.data);

    })
    .catch(error=>{
      console.log('api error:', error);
    });
  }, []);


  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
