import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

// Review data
const reviews = [
  {
    name: "Julian Thomas",
    company: "Dishpatch",
    location: "Abuja, Nigeria",
    rating: 5,
    color: "dark",
  },
  {
    name: "Ben Thomas",
    company: "Dr. Eat",
    location: "Lagos, Nigeria",
    rating: 3,
    color: "danger",
  },
  {
    name: "Obude Thomas",
    company: "Drummer Incorporated",
    location: "Bayelsa, Nigeria",
    rating: 5,
    color: "success",
  },
  {
    name: "Emmanuel Obi",
    company: "BizView",
    location: "Delta, Nigeria",
    rating: 4,
    color: "primary",
  },
  {
    name: "Matthew Bede",
    company: "Ebuka’s Chill Spot",
    location: "Kano, Nigeria",
    rating: 1,
    color: "purple",
  },
  {
    name: "Afeez Jide",
    company: "Mr. Biggs",
    location: "Lagos, Nigeria",
    rating: 3,
    color: "primary",
  },
  {
    name: "Tite Ese",
    company: "Andrew Car Wash",
    location: "Delta, Nigeria",
    rating: 3,
    color: "secondary",
  },
  {
    name: "Ebuka Chuks",
    company: "Open Heaven Hospital",
    location: "Delta, Nigeria",
    rating: 2,
    color: "primary",
  },
  {
    name: "Osas Osamede",
    company: "Mama Treasure Store",
    location: "Edo, Nigeria",
    rating: 5,
    color: "info",
  }
];

// StarRating Component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={`star-box ${i < rating ? 'star-filled' : 'star-empty'}`}>
        &#9733;
      </span>
    );
  }
  return <div className="rating">{stars}</div>;
};

// ReviewCard Component
const ReviewCard = ({ name, company, location, rating, color }) => (
  <Col md={4} className="mb-4">
    <Card className="review-card">
      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          <div className={`circle bg-${color} text-white d-flex align-items-center justify-content-center`}>
            {name[0]}
          </div>
          <div className="ms-3">
            <h6 className="mb-0 fw-bold">{name}</h6>
            <small className="text-muted">{company}</small>
            <p className="location-text mb-1">{location}</p>
          </div>
        </div>
        <StarRating rating={rating} />
        <p className="review-text">Lorem ipsum dolor sit amet consectetur. Ullamcorper turpis maecenas adipiscing quam nam enim et pharetra.</p>
      </Card.Body>
    </Card>
  </Col>
);

// Reviews Component
const LandingpageReviews = () => {
  return (
    <Container className="mt-5"> {/* Increased margin top here */}
      <style>{`
        .review-card {
          border-radius: 8px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
          padding: 12px; /* Reduced padding */
          height: 240px; /* Further reduced height */
        }

        .star-box {
          display: inline-block;
          width: 20px; /* Further reduced star size */
          height: 20px;
          margin-right: 2px;
          text-align: center;
          line-height: 20px;
          border-radius: 4px;
          font-size: 13px; /* Slightly smaller font size */
        }

        .star-filled {
          background-color: orange; /* Background color for filled stars */
          color: white; /* Star color when filled */
        }

        .star-empty {
          background-color: gray; /* Background color for unfilled stars */
          color: white; /* Star color for unfilled stars */
        }

        .circle {
          width: 35px; /* Slightly smaller circle */
          height: 35px;
          font-size: 15px;
          border-radius: 50%;
        }

        .location-text {
          font-size: 0.85rem;
          color: #6c757d;
        }

        .review-text {
          font-size: 0.85rem; /* Slightly reduced review text */
          color: #6c757d;
        }
      `}</style>
      <h2 className="my-4 text-center" style={{ fontSize: '1.40rem', fontWeight: 'bold'  }}>Unfiltered Reviews</h2> 
      <Row>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Row>
    </Container>
  );
};

export default LandingpageReviews;




// import React from 'react';
// import { Card, Row, Col, Container } from 'react-bootstrap';

// // Review data
// const reviews = [
//   {
//     name: "Julian Thomas",
//     company: "Dishpatch",
//     location: "Abuja, Nigeria",
//     rating: 5,
//     color: "dark",
//   },
//   {
//     name: "Ben Thomas",
//     company: "Dr. Eat",
//     location: "Lagos, Nigeria",
//     rating: 3,
//     color: "danger",
//   },
//   {
//     name: "Obude Thomas",
//     company: "Drummer Incorporated",
//     location: "Bayelsa, Nigeria",
//     rating: 5,
//     color: "success",
//   },
//   {
//     name: "Emmanuel Obi",
//     company: "BizView",
//     location: "Delta, Nigeria",
//     rating: 4,
//     color: "primary",
//   },
//   {
//     name: "Matthew Bede",
//     company: "Ebuka’s Chill Spot",
//     location: "Kano, Nigeria",
//     rating: 1,
//     color: "purple",
//   },
//   {
//     name: "Afeez Jide",
//     company: "Mr. Biggs",
//     location: "Lagos, Nigeria",
//     rating: 3,
//     color: "primary",
//   },
//   {
//     name: "Tite Ese",
//     company: "Andrew Car Wash",
//     location: "Delta, Nigeria",
//     rating: 3,
//     color: "secondary",
//   },
//   {
//     name: "Ebuka Chuks",
//     company: "Open Heaven Hospital",
//     location: "Delta, Nigeria",
//     rating: 2,
//     color: "primary",
//   },
//   {
//     name: "Osas Osamede",
//     company: "Mama Treasure Store",
//     location: "Edo, Nigeria",
//     rating: 5,
//     color: "info",
//   }
// ];

// // StarRating Component
// const StarRating = ({ rating }) => {
//   const stars = [];
//   for (let i = 0; i < 5; i++) {
//     stars.push(
//       <span key={i} className={`star-box ${i < rating ? 'star-filled' : 'star-empty'}`}>
//         &#9733;
//       </span>
//     );
//   }
//   return <div className="rating">{stars}</div>;
// };

// // ReviewCard Component
// const ReviewCard = ({ name, company, location, rating, color }) => (
//   <Col md={4} className="mb-4">
//     <Card className="review-card">
//       <Card.Body>
//         <div className="d-flex align-items-center mb-2">
//           <div className={`circle bg-${color} text-white d-flex align-items-center justify-content-center`}>
//             {name[0]}
//           </div>
//           <div className="ms-3">
//             <h6 className="mb-0 fw-bold">{name}</h6>
//             <small className="text-muted">{company}</small>
//             <p className="location-text mb-1">{location}</p>
//           </div>
//         </div>
//         <StarRating rating={rating} />
//         <p className="review-text">Lorem ipsum dolor sit amet consectetur. Ullamcorper turpis maecenas adipiscing quam nam enim et pharetra.</p>
//       </Card.Body>
//     </Card>
//   </Col>
// );

// // Reviews Component
// const Reviews = () => {
//   return (
//     <Container>
//       <style>{`
//         .review-card {
//           border-radius: 10px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }

//         .star-box {
//           display: inline-block;
//           width: 25px;
//           height: 25px;
//           margin-right: 3px;
//           text-align: center;
//           line-height: 25px;
//           border-radius: 4px;
//           font-size: 16px;
//         }

//         .star-filled {
//           background-color: orange; /* Background color for filled stars */
//           color: white; /* Star color when filled */
//         }

//         .star-empty {
//           background-color: gray; /* Background color for unfilled stars */
//           color: white; /* Star color for unfilled stars */
//         }

//         .circle {
//           width: 40px;
//           height: 40px;
//           font-size: 18px;
//           border-radius: 50%;
//         }

//         .location-text {
//           font-size: 0.85rem;
//           color: #6c757d;
//         }

//         .review-text {
//           font-size: 0.9rem;
//           color: #6c757d;
//         }
//       `}</style>
//       <h2 className="my-4 text-center" style={{ fontSize: '1.60rem', fontWeight: 'normal' }}>Unfiltered Reviews</h2> 
//       <Row>
//         {reviews.map((review, index) => (
//           <ReviewCard key={index} {...review} />
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Reviews;

// increae the size a bit, let the card size look like the size we have in the image