import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from "react";
import Signup from "./Signup";
import LandingPage from "./Landingpage";
import UserPageHeader from './UserPageHeader';
import Header from './Header'
import Signin from './Signin';
import Aboutus from './Aboutus'
import Reviewpage from './Reviewpage'
import Security from './Security'
import Notification from './Notification'
import Profile from './Profile';
import Directionpage from './Directionpage';
import ContactSupport from './Contact';
import StoreSearchpage from './Storesearchpage'
import StorePage from './Storepage'


// import FAQ from "./components/Page/FAQ";

export default function Approute() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route exact path="/Signin">
        <Signin />
      </Route>

    
      <Route exact path="/Aboutus">
        <Aboutus/>
      </Route>

      <Route exact path="/Profile">
        <Profile/>
      </Route>


      <Route exact path="/ContactSupport">
        <ContactSupport/>
      </Route>



      <Route exact path="/Reviewpage">
        <Reviewpage/>
      </Route>





      <Route exact path="/Signup">
        <Signup />
      </Route>

     



      

      <Route exact path="/UserPageHeader">
        <UserPageHeader />
      </Route>

 

      <Route exact path="/signup">
        <Signup />
      </Route>


      <Route exact path="/Signin">
        <Signin />
      </Route>

      <Route exact path="/Header">
        <Header />
      </Route>
   
      <Route exact path="/Notification">
          <Notification />
        </Route>
        
        <Route exact path="/Profile">
          <Profile />
        </Route>

        <Route exact path="/Security">
          <Security />
        </Route>



        <Route exact path="/Directionpage">
          <Directionpage />
        </Route>

        <Route exact path="/StoreSearchpage">
          <StoreSearchpage />
        </Route>

        <Route exact path="/StorePage">
          <StorePage />
        </Route>

        

        

        <Route exact path="/ContactSupport">
          <ContactSupport />
        </Route>

    </Switch>
  );
}

