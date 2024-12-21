import React, { useRef } from 'react';
import { Container, Row, Col, Card, Image, Carousel } from 'react-bootstrap';
import testimonial from '../Assets/Team/testimonial.jpg'; 
import testimonial1 from '../Assets/testimonial1.jpg'; 
import testimonial2 from '../Assets/testimonial2.jpg'; 

const LandingpageHowItWorks = () => {
  const carouselRef = useRef(null);

  const goToPrev = () => carouselRef.current.prev();
  const goToNext = () => carouselRef.current.next();

  return (
    <Container className="text-center my-5">
      <style>{`
        /* General styles */
        body {
          font-family: Arial, sans-serif;
          background-color: #fff8f0;
          margin: 0;
          padding: 0;
          overflow-x: hidden; /* Prevent horizontal scrolling */
        }

        /* How It Works Title */
        .how-it-works-title {
          font-weight: bold;
          color: #333;
          margin-bottom: 40px;
        }

        /* How It Works Section */
        .how-it-works-step {
          margin-bottom: 50px;
        }

        .step-box {
          background-color: #ff9500;
          padding: 30px;
          border-radius: 8px;
          color: white;
          text-align: center;
        }

        .step-box h3 {
          font-size: 26px;
          margin-bottom: 15px;
        }

        .step-box p {
          font-size: 18px;
        }

        /* Testimonial Section */
        .testimonial-title {
          font-size: 32px;
          margin-top: 70px;
          margin-bottom: 40px;
          font-weight: bold;
          color: #333;
        }

        .testimonial-card {
          border: none;
          background-color: white;
          text-align: center;
          padding: 30px;
          box-shadow: none; /* Removed box shadow */
          max-width: 300px; /* Adjusted max width for larger devices */
          margin: auto;
        }

        .testimonial-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 15px;
        }

        .testimonial-name {
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 8px;
          color: #333;
        }

        .testimonial-role {
          color: grey;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .testimonial-text {
          font-size: 16px;
          line-height: 1.8;
          color: #333;
        }

        .testimonial-company {
          font-weight: bold;
          font-style: italic;
          display: block;
          margin-top: 12px;
        }

        /* Custom styles for slider arrows */
        .custom-carousel-prev,
        .custom-carousel-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: #333;
          font-size: 50px;
          z-index: 1000;
          cursor: pointer;
        }

        .custom-carousel-prev {
          left: 20px;
        }

        .custom-carousel-next {
          right: 20px;
        }

        /* Carousel responsiveness */
        @media (max-width: 768px) {
          .carousel-item {
            flex-direction: column; /* Stack items vertically on smaller screens */
          }
          .testimonial-card {
            max-width: 100%; /* Allow testimonial cards to stretch fully */
          }

          .step-box {
            padding: 20px; /* Adjust padding for small devices */
          }

          .how-it-works-title,
          .testimonial-title {
            font-size: 28px; /* Adjust title size for small screens */
          }
        }

        @media (max-width: 576px) {
          .custom-carousel-prev,
          .custom-carousel-next {
            font-size: 40px; /* Slightly smaller arrows for mobile */
          }

          .testimonial-title {
            font-size: 24px; /* Adjust title size for small screens */
          }

          .step-box h3 {
            font-size: 22px; /* Adjust step header for mobile */
          }

          .step-box p {
            font-size: 16px; /* Adjust paragraph size for mobile */
          }

          .custom-carousel-prev,
          .custom-carousel-next {
            left: 10px; /* Adjust arrow position on smaller screens */
            right: 10px;
          }
        }
      `}</style>

      {/* How It Works Heading */}
      <h2 className="how-it-works-title" style={{ fontSize: '1.40rem', fontWeight: 'bold'  }}>HOW IT WORKS</h2>

      {/* How It Works Section */}
      <Row className="justify-content-center mb-5">
        <Col xs={12} sm={6} md={4} className="how-it-works-step">
          <div className="step-box">
            <h3>Step 1</h3>
            <p>To leave a review for a company, first you have to sign up for an account</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} className="how-it-works-step">
          <div className="step-box">
            <h3>Step 2</h3>
            <p>Find a store whose services you have been satisfied with or not and leave a review</p>
          </div>
        </Col>
      </Row>

      {/* Testimonials Section */}
      <h2 className="testimonial-title" style={{ fontSize: '1.40rem', fontWeight: 'bold' }}>TESTIMONIALS</h2>

      {/* Carousel for Testimonials */}
      <div className="position-relative">
        <Carousel controls={false} indicators={false} interval={3000} pause={false} ref={carouselRef}>
          {/* Slide 1 with 3 Testimonials */}
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} sm={6} md={4} className="mb-4">
                <Card className="testimonial-card">
                  <Card.Body>
                    <Image
                      src={testimonial}
                      className="testimonial-image"
                      alt="Yejide Olulana"
                    />
                    <div className="testimonial-name">Yejide Olulana</div>
                    <div className="testimonial-role">Store owner</div>
                    <p className="testimonial-text">
                      Advertising on BizView.Support has been very rewarding with higher turnover and good profit. <br />
                      <span className="testimonial-company">Lola's Closet</span>
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={4} className="mb-4">
                <Card className="testimonial-card">
                  <Card.Body>
                    <Image
                      src={testimonial1}
                      className="testimonial-image"
                      alt="Joana Jahmiel"
                    />
                    <div className="testimonial-name">Joana Jahmiel</div>
                    <div className="testimonial-role">Store owner</div>
                    <p className="testimonial-text">
                      Advertising on BizView.Support has been very rewarding with higher turnover and good profit. <br />
                      <span className="testimonial-company">Jojo Athetics</span>
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={6} md={4} className="mb-4">
                <Card className="testimonial-card">
                  <Card.Body>
                    <Image
                      src={testimonial2}
                      className="testimonial-image"
                      alt="Temi Olamide"
                    />
                    <div className="testimonial-name">Temi Olamide</div>
                    <div className="testimonial-role">Store owner</div>
                    <p className="testimonial-text">
                      Advertising on BizView.Support has been very rewarding with higher turnover and good profit. <br />
                      <span className="testimonial-company">Temi Consultancy</span>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          {/* Add more slides if needed */}
        </Carousel>

        {/* Custom Arrow Navigation */}
        <span className="custom-carousel-prev" onClick={goToPrev}>❮</span>
        <span className="custom-carousel-next" onClick={goToNext}>❯</span>
      </div>
    </Container>
  );
};

export default LandingpageHowItWorks;
