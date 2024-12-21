import React from 'react';
import { Container, Row, Col, Image, Button, ProgressBar, Badge} from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import {   Card, Alert } from 'react-bootstrap';
import { FaStore, FaClock, FaShoppingBag, FaExclamationCircle, FaStar } from 'react-icons/fa';
import {FaStarHalfAlt, FaRegStar, FaPen, FaCamera, FaShareAlt } from 'react-icons/fa';
import { Form, InputGroup, Dropdown, DropdownButton, Modal } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'; // Importing a search icon from react-icons
import { Pagination} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Storepageimage from '../Assets/Storepage.jpg'; // Adjust the path to your image file
import  Storepagimage from '../Assets/storepage1.jpg'
import  Storepageeimages from '../Assets/Storepage4.jpg'
import Storepageeimage from '../Assets/storepage3.jpg'
import Directionimage from '../Assets/directionimages.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from "react-router-dom";


const StorePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false)
  const history = useHistory(); // Create a history object using useHistory hook
  

  const reactionIconStyle = {
    fontSize: '1.5rem',
    marginRight: '0.5rem',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    border: '2px solid black',
    borderRadius: '50%',
  };

  const [counts, setCounts] = useState({
    helpful: 3,
    thanks: 0,
    loveThis: 2,
    ohNo: 0,
  });

  const handleReactionClick = (reaction) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [reaction]: prevCounts[reaction] + 1,
    }));
  };



  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle review submission (e.g., API call)
    alert('Review submitted successfully!');
    setShowReviewModal(false);
  };

  const handlePhotoUpload = (e) => {
    e.preventDefault();
    // Add logic to handle photo upload (e.g., API call)
    alert('Photo uploaded successfully!');
    setShowPhotoModal(false);
  };


  // Array of image URLs (replace with actual store image paths)
  const storeImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    // Add more images
  ];


  const active = 1; // Set the active page

  const styles = {
    container: {
      maxWidth: '1400px',
      // margin: '0 auto',
      
    },
    sectionHeader: {
      fontWeight: 'bold',
      marginBottom: '10px',
      fontSize: '24px', // Keep this section unchanged
    },
    sectionHeaderone: {
      fontWeight: 'bold',
      marginBottom: '150px',
      fontSize: '24px', // Keep this section unchanged
    },
    photoSection: {
      padding: '15px',
      borderRadius: '10px',
      textAlign: 'center',
      backgroundColor: '#fff',
      marginBottom: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for elevation
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
    },
    photoTextWrapper: {
      marginTop: '10px',
      textAlign: 'Left',
    },
    photoTitle: {
      fontWeight: '600',
      fontSize: '1.2rem', // Use rem for scaling
      color: '#333',
    },
    photoCount: {
      color: '#888',
      fontSize: '1rem',
    },
    addressStreet: {
      color: '#007bff',
      fontWeight: 'bold',
      fontSize: '1.25rem',
    },
    addressCity: {
      color: 'black',
      fontSize: '1.1rem',
    },
    addressAndButtonWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px', // Adjusted for responsiveness
      marginTop: '20px',
    },
    addressWrapper: {
      flex: '1',
    },
    hoursRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '30px', // Reduce margin for better spacing
    },
    dayCol: {
      flex: '0 1 250px',
      textAlign: 'left',
      paddingRight: '40px',
      fontSize: '1rem',
    },
    timeCol: {
      flex: '1',
      textAlign: 'left',
      fontSize: '1rem',
    },
    openNowText: {
      marginLeft: '10px', // Adjusted for alignment
      color: 'green',
      fontWeight: 'bold',
      fontSize: '1rem',
    },
    suggestEdit: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      color: '#007bff',
      fontWeight: '600',
      fontSize: '1rem',
    },
    pencilIcon: {
      marginLeft: '8px',
      fontSize: '1.25rem',
    },
    headerWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    reviewHighlights: {
      marginTop: '20px',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginLeft: '60px',
    },
    buttonStyle: {
      padding: '10px 20px', // Consistent padding
      fontSize: '1rem',
      border: '1px solid black', // Black border
      borderRadius: '8px',
      backgroundColor: '#fff',
      color: 'black', // Changed text color to black
      transition: 'all 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#f8f9fa',
      borderColor: 'black', // Hover border remains black
      color: 'black', // Text remains black on hover
    },
   

    storePage: {
      marginTop: '0px',
      padding: '20px',
      position: 'relative',
    },
    imageContainer: {
      position: 'relative',
      marginBottom: '20px',
    },
    overlayText: {
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      color: 'white',
      zIndex: 2,
      width: '95%',
    },
    storeName: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#ffffff',
    },
    ratingBadge: {
      fontSize: '1.2rem',
      padding: '10px',
      marginRight: '10px',
    },
    reviewsText: {
      fontSize: '1rem',
      color: '#ffffff',
    },
    storeHours: {
      fontSize: '1.2rem',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    starIcon: {
      color: '#FFD700',
      marginRight: '5px',
    },
    btnLink: {
      color: '#ffffff',
      textDecoration: 'underline',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    btnActionsContainer: {
      display: 'flex',
      justifyContent: 'flex-start', // Align buttons to the left
      gap: '10px',
      marginTop: '20px',
      flexWrap: 'wrap', // Ensure buttons wrap on smaller screens
      
    },
    btnAction: {
      padding: '10px 20px',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
    },
    storeImage: {
      width: '100%',
      maxHeight: '400px',
      maxWidth: '3000px', // Increase maxWidth as needed
      objectFit: 'cover',
      borderRadius: '8px',
    },
    starRatingContainer: {
      display: 'inline-flex',
      alignItems: 'center',
      marginBottom: '5px',
    },
    seeAllPhotos: {
      backgroundColor: 'transparent',
      color: '#ffffff',
      padding: '10px 15px',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      textAlign: 'center',
      border: '1px solid #ffffff',
    },



  };




  const starBoxStyle = {
    width: '25px',
    height: '25px',
    backgroundColor: '#f5a623', // Filled star background (orange)
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5px',
    borderRadius: '4px',
  };

  const emptyStarBoxStyle = {
    ...starBoxStyle,
    backgroundColor: '#e0e0e0', // Empty star background (gray)
  };

  const starStyle = {
    color: '#fff', // White star
    fontSize: '1.2rem',
  };

  const progressBarStyle = {
    height: '10px',
    backgroundColor: '#e0e0e0',
  };

  const progressBarFilledStyle = {
    backgroundColor: '#f5a623',
  };

  // const reactionIconStyle = {
  //   fontSize: '1.3rem',
  // };

  const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: '1.5',
  };

  const userNameStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
  };



  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center',
    padding: '1rem',
    paddingTop: '2rem', // Add top padding to space it below the header
    backgroundColor: 'white',
    width: '100%',
  };

  const inputGroupStyle = {
    width: '50%', // Ensure the search bar takes up half the width
  };

  const searchInputStyle = {
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
    border: '1px solid #ced4da', // Add border
  };

  const searchLocationStyle = {
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    border: '1px solid #ced4da', // Add border
  };

  const buttonStyle = {
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    border: '1px solid #ced4da', // Add border
  };

  const dropdownContainerStyle = {
    display: 'flex',
    marginTop: '1rem', // Space between the search bar and dropdowns
  };

  const dropdownToggleStyle = {
    width: '150px',
    textAlign: 'left',
    boxShadow: 'none', // Remove any shadow if present
    border: 'none', // Remove border
    borderRadius: '0', // Remove border radius
    backgroundColor: 'white', // Set background color to match
  };




  return (

    <div >
        <div style={containerStyle}>
           <InputGroup style={inputGroupStyle}>
        <Form.Control
          placeholder="Try eateries, gym and plumber"
          aria-label="Search businesses"
          style={searchInputStyle}
        />
        <Form.Control
          placeholder="address, city, state, zip"
          aria-label="Search location"
          style={searchLocationStyle}
        />
<Button variant="success" style={buttonStyle}>
  <Link to="/Storesearchpage" style={{ textDecoration: 'none', color: 'white' }}>
    <FaSearch style={{ fontSize: '1.2rem' }} /> {/* Using FaSearch icon */}
  </Link>
</Button>

      </InputGroup>

      {/* Dropdowns for categories */}
      <div style={dropdownContainerStyle}>
        <DropdownButton
          id="dropdown-restaurants"
          title="Restaurants"
          variant="white" // Use 'light' to match background without borders
          style={dropdownToggleStyle}
          className="me-2"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          id="dropdown-home-services"
          title="Home Services"
          variant="white" // Use 'light' to match background without borders
          style={dropdownToggleStyle}
          className="me-2"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          id="dropdown-auto-services"
          title="Auto Services"
          variant="white" // Use 'light' to match background without borders
          style={dropdownToggleStyle}
          className="me-2"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          id="dropdown-more"
          title="More"
          variant="white" // Use 'light' to match background without borders
          style={dropdownToggleStyle}
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
        </DropdownButton>
      </div>
      </div>
  



  



    <div style={{ maxWidth: '1600px', margin: '0 auto' }}>   
     
      {/* Store Image with Overlay Text */}
      <div style={styles.imageContainer}>
        <Image
           src={Storepageimage} // Remove the extra quote here
          fluid
          alt="Storefront"
          style={styles.storeImage}
        />
        <div style={styles.overlayText}>
          <h2 style={styles.storeName}>Mr. Bigg's</h2>
          <p style={{ fontSize: '1.5rem' }}>Always Good</p>
          <div style={styles.starRatingContainer}>
            <FaStar style={styles.starIcon} />
            <FaStar style={styles.starIcon} />
            <FaStar style={styles.starIcon} />
            <FaStarHalfAlt style={styles.starIcon} />
            <FaRegStar style={styles.starIcon} />
          </div>
          <Badge pill bg="none" text="white" style={styles.ratingBadge}>
            3.8
          </Badge>
          <span style={styles.reviewsText}>(403 reviews)</span>

          {/* Flex container to align hours and See All Photos horizontally */}
          <div style={styles.storeHours}>
            <div>
              <span style={{ color: '#00ff00' }}>Open</span> 8:30 AM - 6:00 PM
              <Button variant="link" style={styles.btnLink}>
                See hours
              </Button>
            </div>
            <Button
              variant="light"
              style={styles.seeAllPhotos}
              onClick={() => setShowModal(true)}
            >
              See all 181 photos
            </Button>
          </div>
        </div>
      </div>

      {/* Modal for Gallery */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
            {storeImages.map((image, index) => (
              <Image key={index} src={image} thumbnail alt={`Store Image ${index + 1}`} />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>





    <Container style={styles.container}>
      {/* Action Buttons - Positioned on the Left Side */}
      <div style={styles.btnActionsContainer}>
        <Button variant="danger" style={styles.btnAction}  onClick={() => setShowReviewModal(true)} >
          <FaPen style={{ marginRight: '5px' }} /> Write a review
        </Button>
        <Button variant="secondary" style={styles.btnAction} onClick={() => setShowPhotoModal(true)} >
          <FaCamera style={{ marginRight: '5px' }} /> Add photo
        </Button>
        <Button variant="secondary" style={styles.btnAction} onClick={() => setShowShareModal(true)}>
          <FaShareAlt style={{ marginRight: '5px' }} /> Share
        </Button>
      </div>

      {/* Write Review Modal */}
      <Modal
        show={showReviewModal}
        onHide={() => setShowReviewModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Write a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleReviewSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                as="select"
                required
              >
                <option value="">Select a rating</option>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Good</option>
                <option value="3">3 - Average</option>
                <option value="2">2 - Poor</option>
                <option value="1">1 - Terrible</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your review here..."
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit Review
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Add Photo Modal */}
      <Modal
        show={showPhotoModal}
        onHide={() => setShowPhotoModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePhotoUpload}>
            <Form.Group className="mb-3">
              <Form.Label>Choose a photo</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Upload Photo
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Share Modal */}
      <Modal
        show={showShareModal}
        onHide={() => setShowShareModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Share</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Share this page using the options below:</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <Button variant="primary">Share on Facebook</Button>
            <Button variant="info" style={{ color: 'white' }}>
              Share on Twitter
            </Button>
            <Button variant="secondary">Copy Link</Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* What's the vibe section */}
      <Row className="mt-4">
        <Col>
          <h4 style={styles.sectionHeaderone}>Review Highlights</h4>
          <h4 style={styles.sectionHeader}>What's the vibe?</h4>
        </Col>
      </Row>

      <Row className="mb-4" style={{ marginLeft: '-20px', gap: '170px' }}>
        <Col xs={12} md={3}>
          <div style={styles.photoSection}>
            <Image
             src={Storepageeimage} // Remove the extra quote here // Replace with actual image
              rounded
              fluid
              style={styles.image}
            />
            <div style={styles.photoTextWrapper}>
              <p style={styles.photoTitle}>Inside</p>
              <p style={styles.photoCount}>45 photos</p>
            </div>
          </div>
        </Col>

        <Col xs={12} md={3}>
          <div style={styles.photoSection}>
            <Image
             src={Storepageeimages} // Remove the extra quote here // Replace with actual image
              rounded
              fluid
              style={styles.image}
            />
            <div style={styles.photoTextWrapper}>
              <p style={styles.photoTitle}>Outside</p>
              <p style={styles.photoCount}>18 photos</p>
            </div>
          </div>
        </Col>

        <Col xs={12} md={3}>
          <div style={styles.photoSection}>
            <Image
              src={Storepagimage} // Remove the extra quote here // Replace with actual image // Replace with actual image
              rounded
              fluid
              style={styles.image}
            />
            <div style={styles.photoTextWrapper}>
              <p style={styles.photoTitle}>All photos</p>
              <p style={styles.photoCount}>118 photos</p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Location and Hours section */}
      <Row className="mt-4">
        <Col>
          <div style={styles.headerWrapper}>
            <h4 style={styles.sectionHeader}>Location & Hours</h4>
            <div style={styles.suggestEdit}>
              <span>Suggest an edit</span>
              <Pencil style={styles.pencilIcon} />
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Map and Address Section */}
        <Col xs={12} md={4}>
          <div style={styles.photoSection}>
            <Image
               src={Directionimage} // Remove the extra quote here
              rounded
              fluid
              style={styles.image}
            />
          </div>
          <div style={styles.addressAndButtonWrapper}>
            <div style={styles.addressWrapper}>
              <span style={styles.addressStreet}>23 Adenuga St</span>
              <br />
              <span style={styles.addressCity}>Surulere, Lagos</span>
            </div>
            <Button
              variant="white"
              style={styles.buttonStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style = { ...styles.buttonStyle, ...styles.buttonHover })
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style = styles.buttonStyle)
              }
              onClick={() => history.push("/directionpage")}
            >
              Get Direction
            </Button>
          </div>
        </Col>

        {/* Hours Section */}
        <Col xs={12} md={8}>
          {[
            { day: 'Mon.', hours: '7:00 AM - 8:00 PM' },
            { day: 'Tue.', hours: '7:00 AM - 8:00 PM' },
            { day: 'Wed.', hours: '7:00 AM - 8:00 PM', openNow: true },
            { day: 'Thu.', hours: '7:00 AM - 8:00 PM' },
            { day: 'Fri.', hours: '7:00 AM - 10:00 PM' },
            { day: 'Sat.', hours: '8:00 AM - 10:00 PM' },
            { day: 'Sun.', hours: '10:00 AM - 11:00 PM' },
          ].map((item, index) => (
            <Row key={index} className="mb-2" style={styles.hoursRow}>
              <Col style={styles.dayCol}>
                <span>{item.day}</span>
              </Col>
              <Col style={styles.timeCol}>
                <span>
                  {item.hours}{' '}
                  {item.openNow && (
                    <span style={styles.openNowText}>Open now</span>
                  )}
                </span>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>

     <div>
      {/* About the Business Header */}
      <h4 className="mb-3" style={{ fontWeight: 'bold', fontSize: '22px', marginTop: '80px' }}>About the Business</h4>

      {/* Business Owner Section */}
      <Card className="mb-3 p-3" style={{ border: 'none', borderRadius: '8px' }}>
        <div className="d-flex align-items-center">
          <div className="profile-pic bg-secondary rounded-circle" style={{ width: '60px', height: '60px' }}></div>
          <div className="ms-3" style={{ fontWeight: '500', fontSize: '20px' }}>
            <h5 className="mb-0">Henry Ojo</h5>
            <p className="mb-1 text-muted" style={{ fontSize: '16px' }}>Business Owner</p>
          </div>
        </div>
        <p className="mt-3" style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', width: '100%' }}>
          Lorem ipsum dolor sit amet consectetur. A feugiat consectetur metus turpis molestie. Ullamcorper ut Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, nam. Eaque, laborum. Ab error blanditiis corporis odit vero. Recusandae quisquam voluptatem voluptates, laborum esse reprehenderit. Cum veniam ea reiciendis excepturi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam dolor hic minima, alias assumenda, at quis harum odit maiores odio inventore omnis impedit suscipit nisi atque unde. Minus, totam ab....
        </p>
        <div className="d-flex justify-content-between mt-3" style={{ width: '100%' }}>
          <Button variant="outline-primary" style={{ borderRadius: '5px', fontSize: '16px' }}>Read more</Button>
          <Button variant="outline-secondary" style={{ borderRadius: '5px', fontSize: '16px' }}>Ask a question?</Button>
        </div>
      </Card>

      {/* Highlights Section */}
      <div className="my-3">
        <h5 style={{ fontWeight: 'bold', fontSize: '22px' }}>Highlights from the Business</h5>
        <Row className="text-center" style={{ paddingTop: '15px' }}>
          <Col xs={12} md={4}>
            <FaStore size={50} className="mb-2" />
            <p style={{ fontSize: '18px', fontWeight: '500' }}>Locally owned & operated</p>
          </Col>
          <Col xs={12} md={4}>
            <FaClock size={50} className="mb-2" />
            <p style={{ fontSize: '18px', fontWeight: '500' }}>30 years in Business</p>
          </Col>
          <Col xs={12} md={4}>
            <FaShoppingBag size={50} className="mb-2" />
            <p style={{ fontSize: '18px', fontWeight: '500' }}>Grab-and-go</p>
          </Col>
        </Row>
      </div>

      {/* Review Section */}
      <Card className="p-4 mb-0" style={{ border: 'none', borderRadius: '8px', marginLeft: '-25px', width: '105%' }}>
        <h5 style={{ fontWeight: 'bold', fontSize: '22px' }}>Recommended Reviews</h5>
        <div className="d-flex align-items-center mb-3" style={{ height: '70px' }}>
          <div style={{ width: '10px', height: '70px', backgroundColor: '#0056b3', marginRight: '0' }}></div>
          <Alert variant="info" className="d-flex align-items-center flex-grow-1 m-0"
                 style={{ padding: '15px 20px', marginLeft: '-10px', borderRadius: '0', height: '70px' }}
                 dismissible>
            <FaExclamationCircle className="me-3" style={{ fontSize: '24px' }} />
            <span className="text-muted" style={{ fontSize: '16px' }}>
              Your trust is our top concern, so businesses can't pay to alter or remove their <br /> reviews. 
              <a href="#" style={{ color: '#0056b3', textDecoration: 'underline' }}> Learn more about reviews</a>
            </span>
          </Alert>
        </div>

        {/* New Card Section Below Trust Message */}
        <Card className="mb-3" style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="profile-pic bg-secondary rounded-circle" style={{ width: '60px', height: '60px' }}></div>
              <div className="ms-3">
                <h6 className="mb-0" style={{ fontWeight: '500', fontSize: '18px' }}>Username</h6>
                <p className="mb-1 text-muted" style={{ fontSize: '14px' }}>Location</p>
              </div>
            </div>
            <div className="text-right" style={{ flexShrink: 0 }}>
              <div className="d-flex align-items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#A9A9A9',
                      borderRadius: '3px',
                      marginRight: '4px',
                      padding: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FaStar style={{ color: '#fff', fontSize: '14px' }} />
                  </div>
                ))}
                <span className="ms-2" style={{ fontSize: '16px' }}>Select your rating</span>
              </div>
              <a href="#" style={{ color: '#0056b3', textDecoration: 'underline', fontSize: '16px', display: 'block', textAlign: 'right', marginTop: '8px' }}>
                Start your review of Uncle Ben’s Place
              </a>
            </div>
          </div>
        </Card>
      </Card>


      </div>
       






      {/* storepage rating */}
       <div>
       <Card className="p-3 p-md-4 border-0">
        <Row>
          <Col md={6} xs={12}>
            <h5 style={{ fontSize: '1.6rem' }}>Overall rating</h5>
            <div className="d-flex flex-column align-items-start mb-4">
              <div className="rating-stars d-flex align-items-center">
                <div style={starBoxStyle}>
                  <span style={starStyle}>&#9733;</span>
                </div>
                <div style={starBoxStyle}>
                  <span style={starStyle}>&#9733;</span>
                </div>
                <div style={starBoxStyle}>
                  <span style={starStyle}>&#9733;</span>
                </div>
                <div style={starBoxStyle}>
                  <span style={starStyle}>&#9733;</span>
                </div>
                <div style={emptyStarBoxStyle}>
                  <span style={starStyle}>&#9733;</span>
                </div>
              </div>
              <span className="mt-2" style={{ fontSize: '1rem' }}>303 reviews</span>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div className="rating-breakdown">
              {[{ stars: '5 stars', value: 80 }, { stars: '4 stars', value: 60 }, { stars: '3 stars', value: 40 }, { stars: '2 stars', value: 20 }, { stars: '1 star', value: 10 }].map((item, index) => (
                <div className="d-flex align-items-center mb-3" key={index}>
                  <span style={{ fontSize: '1.1rem' }}>{item.stars}</span>
                  <ProgressBar now={item.value} className="ms-4 flex-grow-1" style={progressBarStyle}>
                    <ProgressBar now={item.value} style={progressBarFilledStyle} key={1} />
                  </ProgressBar>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="user-review">
          <Col md={12}>
            <div className="d-flex align-items-center mb-4">
              <Image src="https://via.placeholder.com/50" roundedCircle className="me-4" style={{ width: '55px', height: '55px' }} />
              <div>
                <h6 style={userNameStyle}>Juliana O.</h6>
                <span className="text-muted" style={{ fontSize: '0.95rem' }}>Onitsha, Anambra state</span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="rating-stars">
                <div style={starBoxStyle}>
                  <span style={starStyle}>&#9733;</span>
                </div>
                <div style={starBoxStyle}>
                  <span style={starStyle}>&#9733;</span>
                </div>
                <div style={starBoxStyle}>
                  <span style={starStyle}>&#9733;</span>
                </div>
                <div style={starBoxStyle}>
                  <span style={starStyle}>&#9733;</span>
                </div>
                <div style={emptyStarBoxStyle}>
                  <span style={starStyle}>&#9733;</span>
                </div>
              </div>
              <span className="ms-4" style={{ fontSize: '1.1rem' }}>June 23, 2024</span>
            </div>
            <p style={paragraphStyle}>
              Lorem ipsum dolor sit amet consectetur. A feugiat consectetur metus turpis molestie Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque accusantium nobis asperiores distinctio repellendus aut optio consequuntur at voluptates quae eligendi est similique in, delectus laborum necessitatibus quis non quidem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, culpa voluptate atque tenetur distinctio architecto. Ratione doloribus quasi ipsum hic, minima consequatur? Impedit non praesentium repellat ipsam qui eligendi fugiat.....
            </p>

            <div className="d-flex mt-3 flex-wrap">
      <div
        className="me-4 d-flex align-items-center"
        onClick={() => handleReactionClick('helpful')}
        style={{ cursor: 'pointer' }}
      >
        <span style={reactionIconStyle}>👍</span>
        <span>
          Helpful <strong style={{ fontSize: '1rem' }}>{counts.helpful}</strong>
        </span>
      </div>
      <div
        className="me-4 d-flex align-items-center"
        onClick={() => handleReactionClick('thanks')}
        style={{ cursor: 'pointer' }}
      >
        <span style={reactionIconStyle}>😊</span>
        <span>
          Thanks <strong style={{ fontSize: '1rem' }}>{counts.thanks}</strong>
        </span>
      </div>
      <div
        className="me-4 d-flex align-items-center"
        onClick={() => handleReactionClick('loveThis')}
        style={{ cursor: 'pointer' }}
      >
        <span style={reactionIconStyle}>😍</span>
        <span>
          Love this <strong style={{ fontSize: '1rem' }}>{counts.loveThis}</strong>
        </span>
      </div>
      <div
        className="me-4 d-flex align-items-center"
        onClick={() => handleReactionClick('ohNo')}
        style={{ cursor: 'pointer' }}
      >
        <span style={reactionIconStyle}>❌</span>
        <span>
          Oh no <strong style={{ fontSize: '1rem' }}>{counts.ohNo}</strong>
        </span>
      </div>
    </div>
          </Col>
        </Row>
      </Card>

      {/* Media Query for Small Screens */}
      <style jsx>{`
        @media (max-width: 768px) {
          .storepage-rating-container {
            margin-left: 0 !important;
          }
        }
      `}</style>
       </div>
    <br />

       <Row className="justify-content-center">
        <Col xs="auto" className="d-flex align-items-center" style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {/* Internal CSS */}
          <style type="text/css">
            {`
              .custom-pagination .page-item {
                margin: 0 36px; /* Increased space between numbers for wider layout */
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

              /* Adjustments for tablets and iPads */
              @media (max-width: 768px) {
                .custom-pagination .page-item {
                  margin: 0 10px; /* Better spacing for tablet devices */
                }
              }

              /* Responsive adjustments for larger screens */
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
    </Container>
    </div>
    </div>
  );
};

export default StorePage;
