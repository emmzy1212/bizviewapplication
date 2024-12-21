// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './pages/Header';
import Headers from './pages/Headers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Approute from "./pages/Route";
import Footer from "./pages/Footer"


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



// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Note: Use Switch instead of Routes
// import 'bootstrap/dist/css/bootstrap.min.css';
// import LandingPage from './pages/Landingpage';
// // import Signup from './pages/Signup';
// import Approute from "./pages/Route";
// import Footer from "./pages/Footer";
// import Headers from "./pages/Headers";

// const App = () => {
//   return (
//     <Router>
//       <Headers /> {/* This should be outside of Switch to render on all pages */}
//       <Switch>
//         <Route exact path="/" component={LandingPage} />
//         {/* <Route path="/signup" component={Signup} /> */}
//         <Route path="/Route" component={Approute} />
//         {/* Add additional routes here */}
//       </Switch>
//       <Footer /> {/* This should be outside of Switch to render on all pages */}
//     </Router>
//   );
// };

// export default App;
