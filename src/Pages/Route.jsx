import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from "react";
import Landingpagesection from './Landingpagesection';
import LandingpageHotDeals from './LandingpageHotDeals';
import LandingpageexploreCategories from './LandingpageexploreCategories';
import LandingpageReviews from './LandingpageReviews';
import LandingpageHowItWorks from './LandingpageHowItWorks';
import LandingpagePlaces from './LandingpagePlaces';
import Landingpagecombined from './Landingpagecombined';
import Reviewpage from './Reviewpage';
import Signup from './Signup';
import Signin from './Signin';
import Profile from './Profile';
import Directionpage from './Directionpage';
import ContactSupport from './Contact';
import Aboutus from './Aboutus';
import Userpageheader from '../Layout/Userpageheader';
import Header from '../Layout/Header'
import Security from '../Pages/Security'
import Notification from '../Pages/Notification'

export default function Approute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landingpagecombined />
        </Route>

        <Route exact path="/Landingpagesection">
          <Landingpagesection />
        </Route>

        <Route exact path="/Landingpagesection">
          <Security />
        </Route>

        <Route exact path="/LandingpageHotDeals">
          <LandingpageHotDeals />
        </Route>

        <Route exact path="/LandingpageexploreCategories">
          <LandingpageexploreCategories />
        </Route>

        <Route exact path="/LandingpageReviews">
          <LandingpageReviews />
        </Route>

        <Route exact path="/LandingpageHowItWorks">
          <LandingpageHowItWorks />
        </Route>

        <Route exact path="/LandingpagePlaces">
          <LandingpagePlaces />
        </Route>

        <Route exact path="/Reviewpage">
          <Reviewpage />
        </Route>

        <Route exact path="/Signin">
          <Signin />
        </Route>

        <Route exact path="/Signup">
          <Signup />
        </Route>

        <Route exact path="/Profile">
          <Profile />
        </Route>

        <Route exact path="/Directionpage">
          <Directionpage />
        </Route>

        <Route exact path="/ContactSupport">
          <ContactSupport />
        </Route>

        <Route exact path="/Header">
        <Header />
      </Route>

      <Route exact path="/Userpageheader ">
        <Userpageheader />
      </Route>

        <Route exact path="/Aboutus">
          <Aboutus />
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
        
      </Switch>
    </Router>
  );
}
