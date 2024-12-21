import React from 'react';
import { Container, Row } from 'react-bootstrap';
import LandingpageHotDealCard from './LandingpageHotDealCard';
import Hotdeal from '../Assets/Hotdeal.jpg'; // Proper import of the Hotdeal image
import Hotdeall from '../Assets/Hotdeal1.jpg'
import Hotdealls from '../Assets/Hotdeal2.jpg'
import Hotdeallss from '../Assets/Hotdeal3.jpg'
import Hotdeallsse from '../Assets/Hotdeal4.jpg'
import Hotdeallpic from '../Assets/Hotdeal5.jpg'
import Hotdeallpics from '../Assets/Hotdeal6.jpg'
import Hotdealpic from '../Assets/Hotdeal7.jpg'
const HotDeals = () => {
  const deals = [
    {
      title: 'Dante Car Wash',
      discount: '20% off Car Wash starting 1st Sept. to 30th Sept.',
      reviews: 60,
      stars: 4,
      imgSrc: Hotdeal, // Reference the imported image correctly
    },
    {
      title: 'Adedeji & Co.',
      discount: '30% off Car Sales starting 5th Sept. to 18th Sept.',
      reviews: 45,
      stars: 3,
      imgSrc: Hotdeall, // Reference the imported image correctly
    },
    {
      title: 'Amalexis Hospital',
      discount: 'Free eye tests starting Oct. 1st to Oct. 30th.',
      reviews: 160,
      stars: 5,
      imgSrc: Hotdealls,
    },
    {
      title: 'Emeka Showroom',
      discount: '20% off Electrical Appliances starting 1st Sept. to 30th Sept.',
      reviews: 60,
      stars: 4,
      imgSrc: Hotdeallss,
    },
    {
      title: 'Fidelity Bank',
      discount: 'Buy shares for as low as 10%',
      reviews: 134,
      stars: 4,
      imgSrc: Hotdeallsse,
    },
    {
      title: 'Oge Travel Consultancy',
      discount: 'Christmas with family and friends',
      reviews: 20,
      stars: 3,
      imgSrc: Hotdeallpic,
    },
    {
      title: 'Adex Fashion Home',
      discount: 'Latest Nike and LV design restocked',
      reviews: 78,
      stars: 4,
      imgSrc: Hotdeallpics,
    },
    {
      title: 'West Moric Schools',
      discount: 'Admission on Academic sessions',
      reviews: 230,
      stars: 5,
      imgSrc: Hotdealpic,
    },
  ];

  return (
    <Container className="py-5">
      <h3 className="text-center mb-" style={{ fontSize: '1.40rem', fontWeight: 'bold' }}>
        HOT DEALS
      </h3>
      <Row>
        {deals.map((deal, index) => (
          <LandingpageHotDealCard key={index} deal={deal} />
        ))}
      </Row>
    </Container>
  );
};

export default HotDeals;
