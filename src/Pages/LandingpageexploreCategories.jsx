import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaBuilding, FaPlane, FaCar, FaCouch, FaUtensils, FaDesktop, FaHospital, FaDumbbell, FaPaw, FaTshirt, FaSchool, FaGem } from 'react-icons/fa';
import './CategoryGrid.css'; // Optional: Use this for custom styling

const LandingpageexploreCategories = () => {
  const categories = [
    { name: 'Bank', icon: <FaBuilding /> },
    { name: 'Travel Insurance Company', icon: <FaPlane /> },
    { name: 'Car Dealer', icon: <FaCar /> },
    { name: 'Furniture Store', icon: <FaCouch /> },
    { name: 'Restaurants', icon: <FaUtensils /> },
    { name: 'Electronics & Technology', icon: <FaDesktop /> },
    { name: 'Hospitals', icon: <FaHospital /> },
    { name: 'Fitness and Nutrition Service', icon: <FaDumbbell /> },
    { name: 'Pet Store', icon: <FaPaw /> },
    { name: 'Jewelry Store', icon: <FaGem /> },
    { name: 'Clothing Store', icon: <FaTshirt /> },
    { name: 'Schools', icon: <FaSchool /> },
  ];

  return (
    <Container>
      {/* Row with title centered and button aligned to right */}
      <Row className="align-items-center my-4">
        <Col xs={12} className="d-flex justify-content-between align-items-center">
          <h5 className="mx-auto" style={{  fontSize: '1.50rem', fontWeight: 'bold'  }}>Explore Categories</h5>
          <Button variant="success" className="btn-md">View All</Button>
        </Col>
      </Row>

      {/* Category grid */}
      <Row>
        {categories.map((category, index) => (
          <Col xs={12} sm={6} md={4} className="my-2" key={index}>
            <Button 
              variant="white" 
              className="category-btn w-100 d-flex align-items-center justify-content-start p-3"
              style={{ fontSize: '1rem', padding: '10px 15px' }} // Adjust padding for better feel on small screens
            >
              <span className="me-2" style={{ fontSize: '1.5rem' }}>{category.icon}</span> 
              <span className="category-text">{category.name}</span>
            </Button>
          </Col>
        ))}
      </Row>
    </Container>

    
  );
};

export default LandingpageexploreCategories;
