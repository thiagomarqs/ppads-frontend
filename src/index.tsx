import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { loginEndpoint } from './services/config';
import { api } from './services/axios';

const user = {
  Username: "amandinha",
  Password: "1234"
}

api.post(loginEndpoint, user)
  .then(r => sessionStorage.setItem('token', `Bearer ${r.data.token}`))
  .catch(error => console.log(error));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
