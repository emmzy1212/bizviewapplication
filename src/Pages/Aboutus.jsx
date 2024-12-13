import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Image1 from '../Assets/Team/Bizview.jpg'; 
import Image2 from '../Assets/Team/Bizview2.png'; 
import Image3 from '../Assets/Team/Bizview3.png'; 
import Image4 from '../Assets/Team/Bizview4.jpg'; 

import BizImage from '../Assets/Team/BizImage.jpeg';
import Bizline from '../Assets/Team/Bizline.jpeg';
import Bizpeople from '../Assets/Team/Bizpeople.jpeg';
import Bbizpeople2 from '../Assets/Team/Bbizpeople2.jpeg';

import KondiImage from '../Assets/Team/Mr kondi.jpg'; 
import EmzzyImage from '../Assets/Team/emzzy.jpg'; 
import BabsImage from '../Assets/Team/babsbaba.jpg';
import MuhammedImage from '../Assets/Team/mmm.jpg';
import WarisImage from '../Assets/Team/wris.jpg';
import HabeebImage from '../Assets/Team/Habeeb.png';
import keyImage from '../Assets/Team/new key.png';

// Image Gallery Component
function Aboutus() {
  const teamMembers = [
    {
      name: "Mr Kondi",
      description: "Leader and visionary of the professional team.",
      image: KondiImage, 
    },
    {
        name: "AFEEZ",
        description: "A creative problem-solver with a focus on delivering results.",
        image: EmzzyImage,
    },
    {
        name: "BABATUNDE",
        description: "An experienced team member with innovative ideas.",
        image: BabsImage, 
      },
    { 
      name: "MUHAMMED", 
      description: "A proactive team player for driving innovative solutions in projects.",
      image: MuhammedImage,
    },
    { 
      name: "WARIS",
      description: "A dynamic contributor to the team",
      image: WarisImage,
    },
    { 
      name: "Mr Habeeb",
      description: "A dedicated professional committed to achieving excellence",
      image: HabeebImage,
    },
    { 
      name: "NAME",
      description: "Lorem ipsum dolor sit amet consectetur. Ac faucibus mauris elit feugiat ut ult",
      image : keyImage ,
    },
  ];

  const imageStyle = {
    width: '250px', 
    height: '150px', 
    objectFit: 'cover', 
    border: '2px solid #ddd', 
    borderRadius: '8px', 
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  };


  
  // Define internal styles
  const containerStyle = {
    paddingTop: '7rem',
  };

  return (
    <div style={containerStyle}>
      {/* About Us Section */}
      <div style={{ backgroundColor: '#e0f7f2', padding: '40px 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>About us</h2>
        <p style={{ fontSize: '1rem', marginBottom: '40px' }}>
          Lorem ipsum dolor sit amet consectetur. Gravida amet iaculis vitae et accumsan. Tellus cursus sit nam eget pulvinar libero.
        </p>
      </div>

      {/* Main Content Section */}
      <Container style={{ marginBottom: '40px' }}>
        <Row style={rowStyle}>
          <Col xs="auto">
            <Image src={Image1} fluid style={imageStyle} />
          </Col>
          <Col xs="auto">
            <Image src={Image2} fluid style={imageStyle} />
          </Col>
          <Col xs="auto">
            <Image src={Image3} fluid style={imageStyle} />
          </Col>
          <Col xs="auto">
            <Image src={Image4} fluid style={imageStyle} />
          </Col>
        </Row>

        <div>
          <Container 
            fluid 
            style={{ 
              maxWidth: '1200px', 
              margin: '0 auto', 
              padding: '20px' 
            }}
          >
            <Row 
              style={{ 
                display: 'flex', 
                alignItems: 'start', 
                marginBottom: '40px',
                justifyContent: 'space-between' 
              }}
            >
              <Col 
                md={6} 
                style={{ 
                  textAlign: 'left', 
                  paddingLeft: '30px' 
                }}
              >
                <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: '#144D3B' }}>
                  We make sure your idea & creation are delivered properly
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Lorem ipsum dolor sit amet consectetur. Ac faucibus mauris elit feugiat ut ultricies orci in massa. Faucibuss feugiat tellus odio malesuada.
                </p>
                <Image src={BizImage} fluid style={imageStyle} />
              </Col>

              <Col 
                md={6} 
                style={{ 
                  textAlign: 'right', 
                  paddingRight: '30px', 
                  marginTop: '65px' 
                }}
              >
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Faucibus bibendum bibendum adipiscing amet nam. Ac ornare quis malesuada nibh convallis nulla. Sodales a pretium massa ut quis feugiat tellus odio malesuada.
                </p>
                <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: '#144D3B' }}>
                  We empower small store owners
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                  Faucibus bibendum bibendum adipiscing amet nam. Ac ornare quis malesuada nibh convallis nulla.
                </p>
                <p
                  style={{
                    fontStyle: 'italic',
                    color: '#144D3B',
                    borderLeft: '5px solid #144D3B',
                    paddingLeft: '10px',
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Ac faucibus mauris elit feugiat ut ultricies orci in massa. Faucibuss feugiat tellus odio malesuada.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div style={{ padding: '60px 20px 20px', textAlign: 'center', backgroundColor: '#fff', minHeight: '100vh' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', marginTop: '-20px' }}>
            We help businesses to grow fast and bigger
          </h2>
          <p style={{ fontSize: '1rem', color: '#666', marginBottom: '60px', maxWidth: '600px', margin: '0 auto' }}>
            Lorem ipsum dolor sit amet consectetur. Ac faucibus mauris elit feugiat ut ultricies orci in massa. Faucibuss.
          </p>

          <Container>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1', textAlign: 'center', margin: '0 20px', minWidth: '250px', paddingTop: '20px' }}>
                <Image
                  src={Bizline}
                  fluid
                  alt="Target Oriented"
                  style={{
                    width: '150px',
                    height: '150px',
                    marginBottom: '20px',
                    borderRadius: '50%',
                  }}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                  Target Oriented
                </h3>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>
                  Lorem ipsum dolor sit amet consectetur. Ac faucibus mauris elit feugiat ut ultricies orci in massa...
                </p>
              </div>

              <div style={{ flex: '1', textAlign: 'center', margin: '0 20px', minWidth: '250px', paddingTop: '20px' }}>
                <Image
                  src={Bizpeople}
                  fluid
                  alt="Success Guarantee"
                  style={{
                    width: '150px',
                    height: '150px',
                    marginBottom: '20px',
                    borderRadius: '50%',
                  }}
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                  Success Guarantee
                </h3>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>
                  Lorem ipsum dolor sit amet consectetur. Ac faucibus mauris elit feugiat ut ultricies orci in massa...
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Image
                src={Bbizpeople2}
                fluid
                alt="Business Growth"
                style={{
                  width: '150px',
                  height: '150px',
                  marginBottom: '20px',
                  borderRadius: '50%',
                }}
              />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                Business Growth
              </h3>
              <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.5' }}>
                Lorem ipsum dolor sit amet consectetur. Ac faucibus mauris elit feugiat ut ultricies orci in massa...
              </p>
            </div>
          </Container>
        </div>




        <div className="container my-5">
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-4 text-center mb-4" key={index}>
            <div>
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    backgroundColor: '#d3d3d3',
                    margin: '0 auto',
                  }}
                ></div>
              )}
            </div>
            <h5 className="mt-3 fw-bold">{member.name}</h5>
            <p className="text-muted">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
      </Container>
    </div>
  );
}

export default Aboutus;




