import React from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import Signup from "./Signup";
import LandingPage from "./Landingpage";
import Signin from './Signin';
import Aboutus from './Aboutus';
import Reviewpage from './Reviewpage';
import Security from './Security';
import Notification from './Notification';
import Profile from './Profile';
import Directionpage from './Directionpage';
import ContactSupport from './Contact';
import StoreSearchpage from './Storesearchpage';
import StorePage from './Storepage';

export default function Approute() {
  return (
    <Switch>
      {/* Route for Home (Landing Page) */}
      <Route exact path="/" component={LandingPage} />

      {/* Public routes */}
      <Route exact path="/Aboutus" component={Aboutus} />
      <Route exact path="/Signin" component={Signin} />
      <Route exact path="/Signup" component={Signup} />

      {/* Authenticated User Routes */}
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/Reviewpage" component={Reviewpage} />
      <Route exact path="/Security" component={Security} />
      <Route exact path="/Notification" component={Notification} />
      <Route exact path="/Directionpage" component={Directionpage} />
      <Route exact path="/StoreSearchpage" component={StoreSearchpage} />
      <Route exact path="/StorePage" component={StorePage} />
      <Route exact path="/ContactSupport" component={ContactSupport} />

      {/* You can add the Header globally in the App component */}
      {/* <Route exact path="/Header" component={Header} /> */}
    </Switch>
  );
}



// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import React from "react";
// import Signup from "./Signup";
// import LandingPage from "./Landingpage";
// import UserPageHeader from './UserPageHeader';
// import Header from './Header'
// import Signin from './Signin';
// import Aboutus from './Aboutus'
// import Reviewpage from './Reviewpage'
// import Security from './Security'
// import Notification from './Notification'
// import Profile from './Profile';
// import Directionpage from './Directionpage';
// import ContactSupport from './Contact';
// import StoreSearchpage from './Storesearchpage'
// import StorePage from './Storepage'


// // import FAQ from "./components/Page/FAQ";

// export default function Approute() {
//   return (
//     <Switch>
//       <Route exact path="/">
//         <LandingPage />
//       </Route>


    
//       <Route exact path="/Aboutus">
//         <Aboutus/>
//       </Route>

//       <Route exact path="/Profile">
//         <Profile/>
//       </Route>





//       <Route exact path="/Reviewpage">
//         <Reviewpage/>
//       </Route>

      

//       <Route exact path="/UserPageHeader">
//         <UserPageHeader />
//       </Route>

 

//       <Route exact path="/signup">
//         <Signup />
//       </Route>


//       <Route exact path="/Signin">
//         <Signin />
//       </Route>

//       <Route exact path="/Header">
//         <Header />
//       </Route>
   
//       <Route exact path="/Notification">
//           <Notification />
//         </Route>
        
//         <Route exact path="/Profile">
//           <Profile />
//         </Route>

//         <Route exact path="/Security">
//           <Security />
//         </Route>



//         <Route exact path="/Directionpage">
//           <Directionpage />
//         </Route>

//         <Route exact path="/StoreSearchpage">
//           <StoreSearchpage />
//         </Route>

//         <Route exact path="/StorePage">
//           <StorePage />
//         </Route>

        

        

//         <Route exact path="/ContactSupport">
//           <ContactSupport />
//         </Route>

//     </Switch>
//   );
// }

