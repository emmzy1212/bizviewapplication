


import React from 'react';
import { Container, Row } from 'react-bootstrap';
import LandingpageHotDealCard from './LandingpageHotDealCard';

const HotDeals = () => {
  const deals = [
    { title: 'Dante Car Wash', discount: '20% off Car Wash starting 1st Sept. to 30th Sept.', reviews: 60, stars: 4, imgSrc: '/images/dante-car-wash.jpg' },
    { title: 'Adedeji & Co.', discount: '30% off Car Sales starting 5th Sept. to 18th Sept.', reviews: 45, stars: 3, imgSrc: '/images/adedeji-car-sales.jpg' },
    { title: 'Amalexis Hospital', discount: 'Free eye tests starting Oct. 1st to Oct. 30th.', reviews: 160, stars: 5, imgSrc: '/images/amalexis-hospital.jpg' },
    { title: 'Emeka Showroom', discount: '20% off Electrical Appliances starting 1st Sept. to 30th Sept.', reviews: 60, stars: 4, imgSrc: '/images/emeka-showroom.jpg' },
    { title: 'Fidelity Bank', discount: 'Buy shares for as low as 10%', reviews: 134, stars: 4, imgSrc: '/images/fidelity-bank.jpg' },
    { title: 'Oge Travel Consultancy', discount: 'Christmas with family and friends', reviews: 20, stars: 3, imgSrc: '/images/oge-travel.jpg' },
    { title: 'Adex Fashion Home', discount: 'Latest Nike and LV design restocked', reviews: 78, stars: 4, imgSrc: '/images/adex-fashion.jpg' },
    { title: 'West Moric Schools', discount: 'Admission on Academic sessions', reviews: 230, stars: 5, imgSrc: '/images/west-moric-school.jpg' }
  ];

  return (
    <Container className="py-5">
      <h3 className="text-center mb-" style={{ fontSize: '1.40rem', fontWeight: 'bold'  }}>HOT DEALS</h3>

      <Row>
        {deals.map((deal, index) => (
          <LandingpageHotDealCard key={index} deal={deal} />
        ))}
      </Row>
    </Container>
  );
};

export default HotDeals;


