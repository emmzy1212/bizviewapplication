import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './Layout/Headers';
import Approute from "./Pages/Route";
import Footer from './Pages/Footer';


const App = () => {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Router>
        <Headers />
        <Approute />
        <Footer/>
         {/* <ContactSupport/> */}
      </Router>
    </div>
  );
};

export default App;
