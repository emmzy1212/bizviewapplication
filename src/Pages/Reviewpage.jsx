import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Dropdown } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import bootstrap icons
import {  Card,  Pagination} from 'react-bootstrap';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bizviewsticker from '../Assets/biz.png'


const Reviewpage = () => {
  const active = 1; // Set the active page

  // Define internal styles
  const containerStyle = {
    paddingTop: '8rem',
    paddingBottom: '3rem',
    maxWidth: '1500px', // Maintain maximum width for larger screens
    margin: '0 auto',
    marginLeft: '100px', // Keep the left margin as you desire
  };

  const inputGroupStyle = {
    borderRadius: '10px', // Keep the border radius for inputs
    border: '1px solid #ddd', // Light border for inputs and button
    overflow: 'hidden', // Ensure inputs and button appear unified
  };

  const searchButtonStyle = {
    backgroundColor: '#4CAF50', // Keep green background for the search button
    border: 'none',
    borderRadius: '0 10px 10px 0', // Rounded right corners for the button
    padding: '10px 20px',
    color: '#fff',
  };

  const formControlStyle = {
    border: 'none',
    borderRight: '1px solid #ccc', // Demarcation between the two input fields
    borderRadius: '0', // To match the clean separation between inputs
  };

  const dropdownStyle = {
    textDecoration: 'none',
    border: 'none',
    color: '#666',
    fontSize: '14px',
  };

  const imageStyle = {
    maxWidth: '100%', // Make the image responsive
    height: 'auto',
    display: 'block',
    marginLeft: '20px', // Space between the form and the image
  };
  

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const handleClick = () => {
        console.log(`Clicked on star ${i}`);
      };

      const starStyle = {
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30px',
        height: '30px',
        marginRight: '4px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        backgroundColor: i <= rating ? '#FFA500' : '#d3d3d3', // Orange for filled stars, gray for empty stars
      };

      if (i <= rating) {
        stars.push(
          <span key={i} onClick={handleClick} style={starStyle}>
            <BsStarFill style={{ color: '#fff', fontSize: '18px' }} />
          </span>
        );
      } else if (i - rating === 0.5) {
        stars.push(
          <span key={i} onClick={handleClick} style={starStyle}>
            <BsStarHalf style={{ color: '#fff', fontSize: '18px' }} />
          </span>
        );
      } else {
        stars.push(
          <span key={i} onClick={handleClick} style={starStyle}>
            <BsStar style={{ color: '#fff', fontSize: '18px' }} />
          </span>
        );
      }
    }
    return stars;
  };


  const reviews = [
    {
      id: 1,
      reviewer: 'Ayodeji Joyce',
      service: 'Amalexis Hospital',
      location: 'Edo state, Nigeria',
      review: 'Lorem ipsum dolor sit amet consectetur. A feugiat consectetur metus turpis molestie.',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4.5,
      initials: 'A',
      color: '#4CAF50',
    },
    {
      id: 2,
      reviewer: 'Joseph Amos',
      service: 'Chris Home Services',
      location: 'Lagos, Nigeria',
      review: 'Lorem ipsum dolor sit amet consectetur. A feugiat consectetur metus turpis molestie.',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4,
      initials: 'J',
      color: '#FF5733',
    },
    {
      id: 3,
      reviewer: 'Jane',
      service: 'XYZ Furniture',
      location: 'Jos, Nigeria',
      review: 'Lorem ipsum dolor sit amet consectetur. A feugiat consectetur metus turpis molestie.',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 3.5,
      initials: 'J',
      color: '#FFC300',
    },
    {
      id: 4,
      reviewer: 'Eze Uche',
      service: 'Eze & Sons Car Stand',
      location: 'Abia, Nigeria',
      review: 'Lorem ipsum dolor sit amet consectetur. A feugiat consectetur metus turpis molestie loreLorem ipsum dolor sit amet consectetur. A feugiat consectetur metus turpis molestie lore.',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4.5,
      initials: 'E',
      color: '#581845',
    },
    {
      id: 5,
      reviewer: 'John Donald',
      service: 'Emeka Showroom',
      location: 'Enugu, Nigeria',
      review: 'Lorem ipsum dolor sit amet consectetur. A feugiat consectetur metus turpis molestie.',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5,
      initials: 'J',
      color: '#C70039',
    },
    {
      id: 6,
      reviewer: 'Vera Opeyemi',
      service: 'Melodia Coding Academy',
      location: 'Lagos, Nigeria',
      review: 'Lorem ipsum dolor sit amet consectetur. A feugiat consectetur metus turpis molestie.',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4,
      initials: 'V',
      color: '#900C3F',
    },
    {
      id: 7,
      reviewer: 'Segun David',
      service: 'West Moric Schools',
      location: 'Lagos, Nigeria',
      review: 'Lorem ipsum dolor sit amet consectetur. A feugiat consectetur metus turpis molestie.',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 3.5,
      initials: 'S',
      color: '#FFC300',
    },
    {
      id: 8,
      reviewer: 'Gloria Deji',
      service: 'Aesthetics and Make-over',
      location: 'Abuja, Nigeria',
      review: 'Lorem ipsum dolor sit amet consectetur. A feugiat consectetur metus turpis molestie.',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 4,
      initials: 'G',
      color: '#DAF7A6',
    },
    {
      id: 9,
      reviewer: 'Adamu Adamu',
      service: 'AD Cattle Ranch',
      location: 'Zamfara, Nigeria',
      review: 'Lorem ipsum dolor sit amet consectetur. A feugiat consectetur metus turpis molestie.',
      imageUrl: 'https://via.placeholder.com/150',
      rating: 5,
      initials: 'A',
      color: '#FF5733',
    },
  ];

  
  return (
    <Container fluid style={containerStyle}>
      <Row className="align-items-center"> {/* Ensure vertical alignment */}
        {/* Left Column: Search Form */}
        <Col xs={12} md={8}>
          {/* Title */}
          <h2 className="mb-3">Checkout the best reviews from your favourite stores</h2>

          {/* Subtitle */}
          <p className="mb-4">Search store reviews by categories</p>

          {/* Search input group */}
          <InputGroup className="mb-3" style={inputGroupStyle}>
            <Form.Control
              placeholder="Try eateries, gym and plumbers"
              aria-label="Search by category"
              className="me-2"
              style={formControlStyle} // Apply form control style for input 1
            />
            <Form.Control
              placeholder="address, city, state, zip..."
              aria-label="Search by location"
              className="me-2"
              style={formControlStyle} // Apply form control style for input 2
            />
            <Button style={searchButtonStyle}>
              <i className="bi bi-search" style={{ fontSize: '18px' }}></i> {/* Bootstrap search icon */}
            </Button>
          </InputGroup>

          {/* Dropdowns for categories */}
          <Row className="text-start mt-3">
            <Col className="d-flex align-items-center justify-content-start">
              <Dropdown>
                <Dropdown.Toggle variant="link" style={dropdownStyle}>
                  Top 10 best Reviews
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="mx-3">
                <Dropdown.Toggle variant="link" style={dropdownStyle}>
                  Top 10 worst Reviews
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="link" style={dropdownStyle}>
                  Most reviewed
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Option 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Option 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Col>

        {/* Right Column: Image */}
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <img 
            src={bizviewsticker} // Use 'logo' here, which is the imported image path
            alt="Illustration" 
            style={imageStyle} 
          />
        </Col>
      </Row>
      


      <div>

      <Row>
        {reviews.map((review) => (
          <Col key={review.id} xs={12} md={6} lg={4} className="mb-3 d-flex">
            <Card
              style={{
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                height: '100%', // Ensure card takes full height of the column
              }}
            >
              <Card.Img
                variant="top"
                src={review.imageUrl}
                style={{
                  borderRadius: '12px',
                  height: '150px',
                  objectFit: 'cover',
                  padding: '5px',
                  backgroundColor: '#fff',
                }}
              />
              <Row className="g-0 align-items-center">
                <Col xs={2} className="text-center">
                  {/* Display initials */}
                  <div
                    style={{
                      backgroundColor: review.color,
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      lineHeight: '40px',
                      color: '#fff',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      margin: '0 auto',
                      marginBottom: '90px'
                    }}
                  >
                    {review.initials}
                  </div>
                </Col>
                <Col xs={10}>
                  <Card.Body style={{ padding: '8px 10px' }}>
                    <Card.Title
                      style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        marginBottom: '0',
                        lineHeight: '1.2',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ marginRight: '8px', verticalAlign: 'middle' }}>{review.reviewer}</span>
                      <span style={{ fontWeight: 'normal', fontSize: '14px', color: '#555' }}> reviewed </span>
                    </Card.Title>
                    <Card.Subtitle
                      style={{
                        fontWeight: 'bold',
                        fontSize: '13px',
                        color: '#555',
                        marginTop: '2px',
                      }}
                    >
                      {review.service}
                    </Card.Subtitle>
                    
                    <Card.Subtitle className="text-muted mb-1" style={{ fontSize: '12px', marginTop: '4px' }}>
                      {review.location}
                    </Card.Subtitle>
                    <div style={{ marginBottom: '5px' }}>{renderStars(review.rating)}</div>
                    <Card.Text
                      style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        height: 'auto',
                        overflow: 'hidden',
                        margin: '5px 0',
                        padding: '5px',
                        marginLeft: '-65px'
                      }}
                    >
                      {review.review}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
      </div>



      <div>
      <Row className="justify-content-center">
        <Col xs="auto" className="d-flex align-items-center" style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {/* Internal CSS */}
          <style type="text/css">
            {`
              .custom-pagination .page-item {
                margin: 0 20px; /* Increased space between numbers for wider layout */
              }

              .custom-pagination .page-item.active .page-link {
                background-color: green;
                border-color: green;
                color: white;
              }

              .custom-pagination .page-link {
                color: gray;
                border: none;
              }

              .custom-pagination .page-link:hover {
                color: black;
              }

              .next-page-btn {
                margin-left: 30px; /* Increased space for wider layout */
              }

              /* Ensure button fits well on smaller screens */
              @media (max-width: 576px) {
                .next-page-btn {
                  margin-left: 5px;
                  margin-top: 10px; /* Stack it below pagination */
                }

                .custom-pagination .page-item {
                  margin: 0 5px; /* Adjusted for smaller screens */
                }
              }

              /* Responsive adjustments */
              @media (min-width: 576px) {
                .custom-pagination {
                  margin-bottom: 20px;
                }
              }
            `}
          </style>

          {/* Custom Pagination with margin below */}
          <div className="d-flex align-items-center custom-pagination">
            <Pagination className="mb-0">
              {/* Previous button with "<" symbol */}
              <Pagination.Prev disabled>{'<'}</Pagination.Prev>

              {/* Page numbers */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <Pagination.Item key={number} active={active === number}>
                  {number}
                </Pagination.Item>
              ))}

              {/* Next button with ">" symbol */}
              <Pagination.Next>{'>'}</Pagination.Next>
            </Pagination>

            {/* "Next Page" button */}
            <Button className="next-page-btn" variant="success">
              Next Page
            </Button>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default Reviewpage;
