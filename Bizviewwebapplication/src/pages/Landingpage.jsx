import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpagesection from './Landingpagesection';
import LandingpageHotDeals from './LandingpageHotDeals';
import LandingpageexploreCategories from './LandingpageexploreCategories';
import LandingpageReviews from './LandingpageReviews';
import LandingpageHowItWorks from './LandingpageHowItWorks';
import LandingpagePlaces from './LandingpagePlaces';

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* <Header /> */}
      <Landingpagesection />
      <LandingpageHotDeals />
      <LandingpageexploreCategories />
      <LandingpageReviews />
      <LandingpageHowItWorks />
      <LandingpagePlaces />
    </div>
  );
};

export default LandingPage;