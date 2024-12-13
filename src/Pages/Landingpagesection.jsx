import React from 'react';
import { Container, Form, Button, InputGroup, Dropdown, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'; // FontAwesome search icon
import heroImage from '../Assets/interior-design.jpg';  // Use your image path

const Landingpagesection = () => {
  return (
    <div
      className="bg-image d-flex justify-content-center align-items-start"
      style={{
        height: '550px', // Set height
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        paddingTop: '80px', // Adjust vertical position
      }}
    >
      <div
        className="bg-white bg-opacity-50 p-4 rounded"
        style={{
          maxWidth: '1000px',
          marginTop: '100px',
          marginLeft: '-750px', // Keep this for larger screens
        }}
      >
        <Container>
          <h1 className="display-5 text-dark mb-4 text-left">
            Find Companies <br /> you can trust
          </h1>

          <Form>
            <Row className="align-items-center mb-3">
              <Col lg={12} sm={12}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Try eateries, gyms, and more..."
                    aria-label="search"
                    className="rounded-start"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'black' }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Address, city, state, zip"
                    aria-label="location"
                    className="rounded-0"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'black' }}
                  />
                  <Button
                    variant="success"
                    className="rounded-end"
                    style={{ padding: '10px 20px' }}
                  >
                    <FaSearch /> {/* Search Icon */}
                  </Button>
                </InputGroup>
              </Col>
            </Row>

            <Row className="align-items-center g-2 justify-content-center">
              {['Restaurants', 'Home Services', 'Auto Services', 'More...'].map((item, index) => (
                <Col xs={6} md={3} className="text-center" key={index}>
                  <Dropdown>
                    <Dropdown.Toggle variant="transparent" className="w-100">
                      {item}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#">{item}</Dropdown.Item>
                      <Dropdown.Item href="#">More...</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              ))}
            </Row>
          </Form>
       

       <div>

        
       </div>



        </Container>
      </div>
      <style jsx>{`
        @media (max-width: 992px) {
          .bg-white {
            margin-left: 0; /* Override margin-left on smaller screens */
            margin-right: auto;
          }
        }
      `}</style>
    </div>


  );
};

export default Landingpagesection;


// <div
// className="bg-white bg-opacity-50 p-4 rounded"
// style={{ maxWidth: '800px', marginTop: '100px',  marginLeft: '-750px' }}
// >




// // this to open responsively properly on all types of devices laptop devices desktop devices ios devices android devices and ipad 