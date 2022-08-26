import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Numbers from './Numbers';
import Who from './Who';
import Request from './Request';
import Areas from './Areas';
import Team from './Team';
import Saying from './Saying';
import Prefooter from './Prefooter';
import Footer from './Footer';
// import Extra from './Extra';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header /> 
    <Numbers />
    <Who />
    <Areas />
    <Request />
    <Team />
    <Saying />
    <Prefooter />
    <Footer />
    {/* <Extra /> */}
  </React.StrictMode>
); 

reportWebVitals();
