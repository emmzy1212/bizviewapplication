import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const LandingpagePlaces = () => {
  return (
    <>
      {/* Meta tag to ensure proper scaling on mobile devices */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <Container className="text-center my-5">
        <style>{`
          /* General styles */
          body {
            font-family: Arial, sans-serif;
            background-color: #ffffff;
            margin: 0;
            padding: 0;
            overflow-x: hidden; /* Prevent horizontal scrolling */
          }

          /* Places Title */
          .places-title {
            font-weight: bold;
            color: #333;
            margin-bottom: 30px; /* Reduced margin */
            font-size: 1.4rem; /* Adjusted for better visibility */
          }

          /* Places Section */
          .places-row {
            margin-bottom: 30px; /* Reduced bottom margin */
          }

          .place-card {
            border: none;
            background-color: white;
            text-align: center;
            border-radius: 8px; /* Rounded corners */
            overflow: hidden;
            margin: 0 10px; /* Reduced margin to make cards closer to arrows */
            padding: 0; /* Removed padding from card */
          }

          .place-image {
            width: 100%;
            height: 120px; /* Reduced height for images */
            object-fit: cover;
          }

          .place-info {
            padding: 10px; /* Reduced padding */
            text-align: left;
          }

          .place-name {
            font-weight: bold;
            font-size: 0.9rem; /* Reduced font size */
            margin: 0;
            color: #333;
          }

          .place-location,
          .place-hours {
            color: #888;
            font-size: 0.8rem; /* Reduced font size */
          }

          .open-status {
            color: green;
            font-weight: bold;
          }

          .checkout-button {
            font-size: 0.7rem; /* Reduced button font size */
            font-weight: bold;
            border-radius: 5px;
            padding: 4px 8px; /* Reduced padding */
            margin-left: auto;
          }

          /* Custom styles for slider arrows */
          .custom-carousel-prev,
          .custom-carousel-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            color: #333;
            font-size: 40px; /* Adjusted size */
            z-index: 1000;
            cursor: pointer;
            margin: 0 10px; /* Reduced horizontal margin */
          }

          .custom-carousel-prev {
            left: -50px; /* Adjusted position from the left */
          }

          .custom-carousel-next {
            right: -50px; /* Adjusted position from the right */
          }

          /* Carousel responsiveness */
          @media (max-width: 768px) {
            .places-row {
              flex-direction: column; /* Stack items vertically on smaller screens */
            }

            .place-card {
              margin-bottom: 15px; /* Adjust spacing for mobile */
            }
          }

          @media (max-width: 576px) {
            .places-title {
              font-size: 1.2rem; /* Smaller title for mobile */
            }

            .place-name {
              font-size: 0.8rem; /* Smaller name for mobile */
            }

            .place-location,
            .place-hours {
              font-size: 0.7rem; /* Smaller text for mobile */
            }

            .custom-carousel-prev,
            .custom-carousel-next {
              font-size: 30px; /* Adjust arrow size for smaller screens */
            }

            .checkout-button {
              font-size: 0.6rem; /* Smaller button size for mobile */
            }
          }
        `}</style>

        {/* Places Heading */}
        <h2 className="places-title">VISITED THESE EXCITING PLACES?</h2>

        {/* Places in two rows with two cards each */}
        <div className="position-relative">
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={6} className="places-row">
              <Card className="place-card">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x120"
                  alt="Arcade Kid’s Playground"
                  className="place-image"
                />
                <Card.Body className="place-info">
                  <Card.Title className="place-name">Arcade Kid’s Playground</Card.Title>
                  <Card.Text className="place-location">Abuja, Nigeria</Card.Text>
                  <Card.Text className="place-hours">
                    <span className="open-status">Open</span> 10:00 AM - 5:00 PM
                  </Card.Text>
                  <Button variant="outline-dark" className="checkout-button">Checkout</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} className="places-row">
              <Card className="place-card">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x120"
                  alt="China Man Grills and Sharwama"
                  className="place-image"
                />
                <Card.Body className="place-info">
                  <Card.Title className="place-name">China Man Grills and Sharwama</Card.Title>
                  <Card.Text className="place-location">Abuja, Nigeria</Card.Text>
                  <Card.Text className="place-hours">
                    <span className="open-status">Open</span> 10:00 AM - 10:00 PM
                  </Card.Text>
                  <Button variant="outline-dark" className="checkout-button">Checkout</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={6} className="places-row">
              <Card className="place-card">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x120"
                  alt="Lola’s Spa & Facials"
                  className="place-image"
                />
                <Card.Body className="place-info">
                  <Card.Title className="place-name">Lola’s Spa & Facials</Card.Title>
                  <Card.Text className="place-location">Abia, Nigeria</Card.Text>
                  <Card.Text className="place-hours">
                    <span className="open-status">Open</span> 8:00 AM - 5:00 PM
                  </Card.Text>
                  <Button variant="outline-dark" className="checkout-button">Checkout</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} className="places-row">
              <Card className="place-card">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/300x120"
                  alt="Obong’s Kitchen"
                  className="place-image"
                />
                <Card.Body className="place-info">
                  <Card.Title className="place-name">Obong’s Kitchen</Card.Title>
                  <Card.Text className="place-location">Akwa Ibom, Nigeria</Card.Text>
                  <Card.Text className="place-hours">
                    <span className="open-status">Open</span> 11:00 AM - 10:00 PM
                  </Card.Text>
                  <Button variant="outline-dark" className="checkout-button">Checkout</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Custom Arrow Navigation */}
          <span className="custom-carousel-prev">❮</span>
          <span className="custom-carousel-next">❯</span>
        </div>
      </Container>
    </>
  );
};

export default LandingpagePlaces;





// code with inline style
// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// const Places = () => {
//   const styles = {
//     container: {
//       textAlign: 'center',
//       marginTop: '5rem',
//     },
//     title: {
//       fontWeight: 'bold',
//       color: '#333',
//       marginBottom: '30px',
//       fontSize: '1.4rem',
//     },
//     row: {
//       marginBottom: '30px',
//     },
//     card: {
//       border: 'none',
//       backgroundColor: 'white',
//       textAlign: 'center',
//       borderRadius: '8px',
//       overflow: 'hidden',
//       margin: '0 10px',
//       padding: '0',
//     },
//     image: {
//       width: '100%',
//       height: '120px',
//       objectFit: 'cover',
//     },
//     info: {
//       padding: '10px',
//       textAlign: 'left',
//     },
//     name: {
//       fontWeight: 'bold',
//       fontSize: '0.9rem',
//       margin: '0',
//       color: '#333',
//     },
//     location: {
//       color: '#888',
//       fontSize: '0.8rem',
//     },
//     hours: {
//       color: '#888',
//       fontSize: '0.8rem',
//     },
//     openStatus: {
//       color: 'green',
//       fontWeight: 'bold',
//     },
//     button: {
//       fontSize: '0.7rem',
//       fontWeight: 'bold',
//       borderRadius: '5px',
//       padding: '4px 8px',
//       marginLeft: 'auto',
//     },
//     arrowPrev: {
//       position: 'absolute',
//       top: '50%',
//       transform: 'translateY(-50%)',
//       color: '#333',
//       fontSize: '40px',
//       zIndex: 1000,
//       cursor: 'pointer',
//       margin: '0 10px',
//       left: '-50px',
//     },
//     arrowNext: {
//       position: 'absolute',
//       top: '50%',
//       transform: 'translateY(-50%)',
//       color: '#333',
//       fontSize: '40px',
//       zIndex: 1000,
//       cursor: 'pointer',
//       margin: '0 10px',
//       right: '-50px',
//     },
//     // Media query adjustments
//     '@media (maxWidth: 768px)': {
//       row: {
//         flexDirection: 'column',
//       },
//       card: {
//         marginBottom: '15px',
//       },
//     },
//     '@media (maxWidth: 576px)': {
//       title: {
//         fontSize: '1.2rem',
//       },
//       name: {
//         fontSize: '0.8rem',
//       },
//       location: {
//         fontSize: '0.7rem',
//       },
//       hours: {
//         fontSize: '0.7rem',
//       },
//       button: {
//         fontSize: '0.6rem',
//       },
//       arrowPrev: {
//         fontSize: '30px',
//       },
//       arrowNext: {
//         fontSize: '30px',
//       },
//     },
//   };

//   return (
//     <>
//       {/* Meta tag to ensure proper scaling on mobile devices */}
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />

//       <Container style={styles.container}>
//         {/* Places Heading */}
//         <h2 style={styles.title}>VISITED THESE EXCITING PLACES?</h2>

//         {/* Places in two rows with two cards each */}
//         <div className="position-relative">
//           <Row className="justify-content-center" style={styles.row}>
//             <Col xs={12} sm={6} md={6}>
//               <Card style={styles.card}>
//                 <Card.Img
//                   variant="top"
//                   src="https://via.placeholder.com/300x120"
//                   alt="Arcade Kid’s Playground"
//                   style={styles.image}
//                 />
//                 <Card.Body style={styles.info}>
//                   <Card.Title style={styles.name}>Arcade Kid’s Playground</Card.Title>
//                   <Card.Text style={styles.location}>Abuja, Nigeria</Card.Text>
//                   <Card.Text style={styles.hours}>
//                     <span style={styles.openStatus}>Open</span> 10:00 AM - 5:00 PM
//                   </Card.Text>
//                   <Button variant="outline-dark" style={styles.button}>
//                     Checkout
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col xs={12} sm={6} md={6}>
//               <Card style={styles.card}>
//                 <Card.Img
//                   variant="top"
//                   src="https://via.placeholder.com/300x120"
//                   alt="China Man Grills and Sharwama"
//                   style={styles.image}
//                 />
//                 <Card.Body style={styles.info}>
//                   <Card.Title style={styles.name}>China Man Grills and Sharwama</Card.Title>
//                   <Card.Text style={styles.location}>Abuja, Nigeria</Card.Text>
//                   <Card.Text style={styles.hours}>
//                     <span style={styles.openStatus}>Open</span> 10:00 AM - 10:00 PM
//                   </Card.Text>
//                   <Button variant="outline-dark" style={styles.button}>
//                     Checkout
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>

//           <Row className="justify-content-center" style={styles.row}>
//             <Col xs={12} sm={6} md={6}>
//               <Card style={styles.card}>
//                 <Card.Img
//                   variant="top"
//                   src="https://via.placeholder.com/300x120"
//                   alt="Lola’s Spa & Facials"
//                   style={styles.image}
//                 />
//                 <Card.Body style={styles.info}>
//                   <Card.Title style={styles.name}>Lola’s Spa & Facials</Card.Title>
//                   <Card.Text style={styles.location}>Abia, Nigeria</Card.Text>
//                   <Card.Text style={styles.hours}>
//                     <span style={styles.openStatus}>Open</span> 8:00 AM - 5:00 PM
//                   </Card.Text>
//                   <Button variant="outline-dark" style={styles.button}>
//                     Checkout
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col xs={12} sm={6} md={6}>
//               <Card style={styles.card}>
//                 <Card.Img
//                   variant="top"
//                   src="https://via.placeholder.com/300x120"
//                   alt="Obong’s Kitchen"
//                   style={styles.image}
//                 />
//                 <Card.Body style={styles.info}>
//                   <Card.Title style={styles.name}>Obong’s Kitchen</Card.Title>
//                   <Card.Text style={styles.location}>Akwa Ibom, Nigeria</Card.Text>
//                   <Card.Text style={styles.hours}>
//                     <span style={styles.openStatus}>Open</span> 11:00 AM - 10:00 PM
//                   </Card.Text>
//                   <Button variant="outline-dark" style={styles.button}>
//                     Checkout
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>

//           {/* Custom Arrow Navigation */}
//           <span style={styles.arrowPrev}>❮</span>
//           <span style={styles.arrowNext}>❯</span>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default Places;











// this is the one with carousel
// import React, { useRef } from 'react';
// import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

// const Places = () => {
//   const carouselRef = useRef(null);

//   const goToPrev = () => carouselRef.current.prev();
//   const goToNext = () => carouselRef.current.next();

//   return (
//     <Container className="text-center my-5">
//       <style>{`
//         /* General styles */
//         body {
//           font-family: Arial, sans-serif;
//           background-color: #ffffff;
//           margin: 0;
//           padding: 0;
//           overflow-x: hidden; /* Prevent horizontal scrolling */
//         }

//         /* Places Title */
//         .places-title {
//           font-weight: bold;
//           color: #333;
//           margin-bottom: 40px;
//           font-size: 1.5rem; /* Adjusted for better visibility */
//         }

//         /* Places Section */
//         .places-row {
//           margin-bottom: 50px;
//         }

//         .place-card {
//           border: none;
//           background-color: white;
//           text-align: center;
//           border-radius: 8px; /* Rounded corners */
//           overflow: hidden;
//           margin-bottom: 20px; /* Spacing between cards */
//         }

//         .place-image {
//           width: 100%;
//           height: 150px; /* Fixed height for uniformity */
//           object-fit: cover;
//         }

//         .place-info {
//           padding: 15px;
//           text-align: left;
//         }

//         .place-name {
//           font-weight: bold;
//           font-size: 1rem;
//           margin: 0;
//           color: #333;
//         }

//         .place-location,
//         .place-hours {
//           color: #888;
//           font-size: 0.9rem;
//         }

//         .open-status {
//           color: green;
//           font-weight: bold;
//         }

//         .checkout-button {
//           font-size: 0.8rem; /* Consistent button size */
//           font-weight: bold;
//           border-radius: 5px;
//           padding: 6px 10px;
//           margin-left: auto;
//         }

//         /* Custom styles for slider arrows */
//         .custom-carousel-prev,
//         .custom-carousel-next {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           color: #333;
//           font-size: 50px; /* Match the size from How It Works */
//           z-index: 1000;
//           cursor: pointer;
//         }

//         .custom-carousel-prev {
//           left: 20px; /* Adjust positioning */
//         }

//         .custom-carousel-next {
//           right: 20px; /* Adjust positioning */
//         }

//         /* Carousel responsiveness */
//         @media (max-width: 768px) {
//           .places-row {
//             flex-direction: column; /* Stack items vertically on smaller screens */
//           }

//           .place-card {
//             margin-bottom: 15px; /* Adjust spacing for mobile */
//           }
//         }

//         @media (max-width: 576px) {
//           .places-title {
//             font-size: 1.2rem; /* Smaller title for mobile */
//           }

//           .place-name {
//             font-size: 0.9rem; /* Smaller name for mobile */
//           }

//           .place-location,
//           .place-hours {
//             font-size: 0.8rem; /* Smaller text for mobile */
//           }

//           .custom-carousel-prev,
//           .custom-carousel-next {
//             font-size: 40px; /* Adjust arrow size for smaller screens */
//           }

//           .checkout-button {
//             font-size: 0.7rem; /* Smaller button size for mobile */
//           }
//         }
//       `}</style>

//       {/* Places Heading */}
//       <h2 className="places-title">VISITED THESE EXCITING PLACES?</h2>

//       {/* Carousel for Places */}
//       <div className="position-relative">
//         <Carousel controls={false} indicators={false} interval={3000} pause={false} ref={carouselRef}>
//           {/* Slide 1 with Places */}
//           <Carousel.Item>
//             <Row className="justify-content-center">
//               <Col xs={12} sm={6} md={4} className="places-row">
//                 <Card className="place-card">
//                   <Card.Img
//                     variant="top"
//                     src="https://via.placeholder.com/300x150"
//                     alt="Arcade Kid’s Playground"
//                     className="place-image"
//                   />
//                   <Card.Body className="place-info">
//                     <Card.Title className="place-name">Arcade Kid’s Playground</Card.Title>
//                     <Card.Text className="place-location">Abuja, Nigeria</Card.Text>
//                     <Card.Text className="place-hours">
//                       <span className="open-status">Open</span> 10:00 AM - 5:00 PM
//                     </Card.Text>
//                     <Button variant="outline-dark" className="checkout-button">Checkout</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col xs={12} sm={6} md={4} className="places-row">
//                 <Card className="place-card">
//                   <Card.Img
//                     variant="top"
//                     src="https://via.placeholder.com/300x150"
//                     alt="China Man Grills and Sharwama"
//                     className="place-image"
//                   />
//                   <Card.Body className="place-info">
//                     <Card.Title className="place-name">China Man Grills and Sharwama</Card.Title>
//                     <Card.Text className="place-location">Abuja, Nigeria</Card.Text>
//                     <Card.Text className="place-hours">
//                       <span className="open-status">Open</span> 10:00 AM - 10:00 PM
//                     </Card.Text>
//                     <Button variant="outline-dark" className="checkout-button">Checkout</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </Carousel.Item>

//           {/* Slide 2 with Places */}
//           <Carousel.Item>
//             <Row className="justify-content-center">
//               <Col xs={12} sm={6} md={4} className="places-row">
//                 <Card className="place-card">
//                   <Card.Img
//                     variant="top"
//                     src="https://via.placeholder.com/300x150"
//                     alt="Lola’s Spa & Facials"
//                     className="place-image"
//                   />
//                   <Card.Body className="place-info">
//                     <Card.Title className="place-name">Lola’s Spa & Facials</Card.Title>
//                     <Card.Text className="place-location">Abia, Nigeria</Card.Text>
//                     <Card.Text className="place-hours">
//                       <span className="open-status">Open</span> 8:00 AM - 5:00 PM
//                     </Card.Text>
//                     <Button variant="outline-dark" className="checkout-button">Checkout</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//               <Col xs={12} sm={6} md={4} className="places-row">
//                 <Card className="place-card">
//                   <Card.Img
//                     variant="top"
//                     src="https://via.placeholder.com/300x150"
//                     alt="Obong’s Kitchen"
//                     className="place-image"
//                   />
//                   <Card.Body className="place-info">
//                     <Card.Title className="place-name">Obong’s Kitchen</Card.Title>
//                     <Card.Text className="place-location">Akwa Ibom, Nigeria</Card.Text>
//                     <Card.Text className="place-hours">
//                       <span className="open-status">Open</span> 9:30 AM - 10:00 PM
//                     </Card.Text>
//                     <Button variant="outline-dark" className="checkout-button">Checkout</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </Carousel.Item>
//         </Carousel>

//         {/* Custom Arrow Navigation */}
//         <span className="custom-carousel-prev" onClick={goToPrev}>❮</span>
//         <span className="custom-carousel-next" onClick={goToNext}>❯</span>
//       </div>
//     </Container>
//   );
// };

// export default Places;














