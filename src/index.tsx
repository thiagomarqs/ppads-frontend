import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { loginEndpoint } from './services/config';
import { api } from './services/axios';
import AppRouter from './routes';
import App from './App';

const user = {
  Username: "amandinha",
  Password: "1234"
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <h2>Carregando...</h2>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// api.post(loginEndpoint, user)
//   .then(
//     r => { 
//       sessionStorage.setItem('token', `Bearer ${r.data.token}`);
//       ReactDOM.render(
//         <React.StrictMode>
//           <AppRouter />
//         </React.StrictMode>,
//         document.getElementById('root')
//       );
//     }
    
//   )
//   .catch(error => console.log(error));



