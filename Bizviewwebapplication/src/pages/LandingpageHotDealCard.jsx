import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const LandingpageHotDealCard = ({ deal }) => {
  const { title, discount, reviews, stars, imgSrc } = deal;

  const renderStars = () => {
    let starsArray = [];
    for (let i = 0; i < 5; i++) {
      starsArray.push(
        <span
          key={i}
          style={{
            display: 'inline-block',
            width: '24px',
            height: '24px',
            backgroundColor: i < stars ? 'orange' : '#ddd', // Orange for filled stars, gray for unfilled
            color: 'white', // White star color
            textAlign: 'center',
            borderRadius: '4px', // Slightly rounded corners
            lineHeight: '24px', // Vertical alignment for the icon
            marginRight: '4px', // Spacing between stars
          }}
        >
          <FaStar style={{ fontSize: '16px' }} />
        </span>
      );
    }
    return starsArray;
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4"> {/* Adjust for better responsiveness */}
      <Card className="h-100">
        <Card.Img 
          variant="top" 
          src={imgSrc} 
          alt={title} 
          className="img-fluid" 
          style={{ padding: '1rem' }} // Add padding to the image
        /> 
        <Card.Body style={{ padding: '1rem' }}> {/* Maintain the same padding for the body */}
          <Card.Title>{title}</Card.Title>
          <Card.Text>{discount}</Card.Text>
          <div className="d-flex flex-column align-items-start"> {/* Align items to the left */}
            <div className="d-flex align-items-center"> {/* Horizontal alignment for stars */}
              {renderStars()}
            </div>
            <small className="mt-1">{reviews} Reviews</small> {/* Slight space below stars */}
          </div>
          <Button variant="success" className="mt-3 w-100">Visit</Button>
        </Card.Body>
      </Card>
    </Col>


  
  );
};

export default LandingpageHotDealCard;


// import React from 'react';
// import { Col, Card, Button } from 'react-bootstrap';
// import { FaStar } from 'react-icons/fa';

// const HotDealCard = ({ deal }) => {
//   const { title, discount, reviews, stars, imgSrc } = deal;

//   const renderStars = () => {
//     let starsArray = [];
//     for (let i = 0; i < 5; i++) {
//       starsArray.push(
//         <span
//           key={i}
//           style={{
//             display: 'inline-block',
//             width: '24px',
//             height: '24px',
//             backgroundColor: i < stars ? 'orange' : '#ddd', // Orange for filled stars, gray for unfilled
//             color: 'white', // White star color
//             textAlign: 'center',
//             borderRadius: '4px', // Slightly rounded corners
//             lineHeight: '24px', // Vertical alignment for the icon
//             marginRight: '4px', // Spacing between stars
//           }}
//         >
//           <FaStar style={{ fontSize: '16px' }} />
//         </span>
//       );
//     }
//     return starsArray;
//   };

//   return (
//     <Col xs={12} sm={6} md={4} lg={3} className="mb-4"> {/* Adjust for better responsiveness */}
//       <Card className="h-100">
//         <Card.Img 
//           variant="top" 
//           src={imgSrc} 
//           alt={title} 
//           className="img-fluid" 
//           style={{ padding: '1rem' }} // Add padding to the image
//         /> 
//         <Card.Body style={{ padding: '1rem' }}> {/* Maintain the same padding for the body */}
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{discount}</Card.Text>
//           <div className="d-flex flex-column align-items-start"> {/* Align items to the left */}
//             <div className="d-flex align-items-center"> {/* Horizontal alignment for stars */}
//               {renderStars()}
//             </div>
//             <small className="mt-1">{reviews} Reviews</small> {/* Slight space below stars */}
//           </div>
//           <Button variant="success" className="mt-3 w-100">Visit</Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// export default HotDealCard;
