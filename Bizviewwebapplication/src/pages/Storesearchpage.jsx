import React from 'react';
import {  Pagination, Container, Row, Col, Form, InputGroup, Button, Breadcrumb, Dropdown, Nav, Card, Image} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap icons
import { FaStar } from 'react-icons/fa';
import { ChatLeftText } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import "./Storesearchpage.css"; // Ensure the CSS import is correct
import { Link } from 'react-router-dom'; // Add this import
import Storesearchpic from '../Assets/searchpagepic1.jpg'
import Storesearchpics from '../Assets/searchpagepic.jpg'
import Storesearchpicss from '../Assets/searchpagepic2.jpg'
import Restaurant from '../Assets/Restuarant3.jpg'
import Restaurants from '../Assets/Restuarant5.jpg'
import Restaurantss from '../Assets/Restuarant4.jpg'
const StoreSearchpage = () => {
    const active = 1; // Set the active page

    const styles = {
        container: {
          fontFamily: 'Arial, sans-serif',
          width: '1400px', // Keeping the original width
          margin: '0 auto',
          padding: '0px -400px 0px 20px',
          marginLeft: '50px', // Cleaned up negative margin
        },
        heading: {
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
          textAlign: 'left', // Left-align the heading
          marginTop: '50px'
        },
        list: {
          listStyleType: 'none', // Removes the bullet points
          padding: 0,
        },
        listItem: {
          fontSize: '18px',
          fontWeight: 'normal',
          lineHeight: '2em', // Adds spacing between the items
        },
      };
      
      // Media queries for responsiveness
      const mediaQueries = {
        '@media (max-width: 1200px)': {
          container: {
            width: '90%', // Change width to 90% for medium screens
            padding: '0 10px', // Adjust padding for smaller screens
          },
          heading: {
            fontSize: '22px', // Slightly smaller font size
          },
          listItem: {
            fontSize: '16px', // Slightly smaller font size
          },
        },
        '@media (max-width: 768px)': {
          container: {
            width: '95%', // Change width to 95% for tablets
          },
          heading: {
            fontSize: '20px', // Smaller font size for tablets and phones
          },
          listItem: {
            fontSize: '16px', // Consistent font size
          },
        },
        '@media (max-width: 480px)': {
          container: {
            width: '100%', // Full width for mobile
          },
          heading: {
            fontSize: '18px', // Further reduce font size for mobile
          },
          listItem: {
            fontSize: '14px', // Further reduce font size for mobile
          },
        },
      };
      



    const containerStyle = {
        paddingTop: '8rem',
        paddingBottom: '3rem',
        maxWidth: '1400px',
        margin: '0 auto',
    };


    const eateries = [
        {
          name: "Mc Donalds",
          reviews: 231,
          rating: 5,
          address: "1st floor, city mall, beside TBS Onikan, Lagos, Nigeria",
          openUntil: "9:00 PM",
          image: Storesearchpic,
         
        },
        {
          name: "Mat Ice",
          reviews: 112,
          rating: 5,
          address: "23, Obanikoro Estate, Ajah, Lagos, Nigeria",
          openUntil: "9:00 PM",
          image: Storesearchpics,
        },
        {
          name: "Mr. Biggs",
          reviews: 67,
          rating: 3,
          address: "45, Thomas Estate, Surelere, Lagos, Nigeria",
          openUntil: "9:00 PM",
          image: Storesearchpicss,
        },
      ];
    
      // Function to render the white star in an orange box
      const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
          stars.push(
            <div
              key={i}
              style={{
                backgroundColor: i < rating ? 'orange' : '#d3d3d3', // Orange for filled stars, light gray for empty stars
                width: '20px', // Box width
                height: '20px', // Box height
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '3px', // Slight rounding for the box
                marginRight: '4px', // Spacing between stars
              }}
            >
              <FaStar 
                size={12} // Smaller star inside the box
                color='white' // White star color
              />
            </div>
          );
        }
        return stars;
      };



      const getStars = (rating) => {
        const fullStars = Math.floor(rating); // Full stars
        const halfStars = rating % 1 !== 0 ? 1 : 0; // If there’s a decimal, add one half star
        const emptyStars = 5 - fullStars - halfStars; // Remaining empty stars
      
        const starsArray = [];
      
        // Add full stars (solid)
        for (let i = 0; i < fullStars; i++) {
          starsArray.push(
            <div
              key={`full-${i}`}
              style={{
                backgroundColor: 'orange', // Orange background for each full star
                padding: '5px',
                marginRight: '5px',
                borderRadius: '3px',
                display: 'inline-block',
              }}
            >
              <span style={{ color: 'white' }}>★</span>
            </div>
          );
        }
      
        // Add half star with a different background (hollow star to represent a partial rating)
        if (halfStars) {
          starsArray.push(
            <div
              key="half"
              style={{
                backgroundColor: '#d3d3d3', // Light gray background for half star (different from full stars)
                padding: '5px',
                marginRight: '5px',
                borderRadius: '3px',
                display: 'inline-block',
              }}
            >
              <span style={{ color: 'white' }}>☆</span>
            </div>
          );
        }
      
        // Add empty stars with the same different background as the half star
        for (let i = 0; i < emptyStars; i++) {
          starsArray.push(
            <div
              key={`empty-${i}`}
              style={{
                backgroundColor: '#d3d3d3', // Light gray background for empty stars
                padding: '5px',
                marginRight: '5px',
                borderRadius: '3px',
                display: 'inline-block',
              }}
            >
              <span style={{ color: 'white' }}>☆</span>
            </div>
          );
        }
      
        return starsArray;
      };







      const eateryy = [
        {
          id: 1,
          name: "Mr. Justice Kitchen",
          rating: 4.7,
          reviews: 1400,
          status: "Opens in 10 min",
          imageUrl: Restaurant,
        },
        {
          id: 2,
          name: "Mark's Kitchen",
          rating: 4.7,
          reviews: 1400,
          status: "Closed 10:00 AM - 10:30 PM",
          imageUrl: Restaurants,
        },
        {
          id: 3,
          name: "Street Food & Grills",
          rating: 3.7,
          reviews: 600,
          status: "Opens in 40 min",
          imageUrl: Restaurantss,
        },
      ];
    









    return (
        <Container style={containerStyle}>
            {/* Internal Styling */}
            <style type="text/css">
                {`
                /* Search Input Row Styling */
                .search-input-group {
                    display: flex;
                    justify-content: center; /* Center the search input group */
                    margin-bottom: 10px;
                    flex-wrap: wrap; /* Allow inputs to wrap on small screens */
                }
                .search-input-group .form-control {
                    height: 42px;
                    font-size: 16px;
                    margin-right: 0px; /* No space between inputs */
                    flex: 1 1 auto; /* Allow form control to grow */
                    min-width: 200px; /* Minimum width to ensure visibility */
                }
                .search-input-group .btn-success {
                    height: 42px;
                    width: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }

                /* Navbar for Services */
                .services-nav {
                    display: flex;
                    justify-content: center; /* Center the services nav */
                    margin-top: 10px;
                    margin-bottom: 20px;
                    flex-wrap: wrap; /* Allow items to wrap */
                }
                .services-nav .nav-link {
                    font-size: 14px;
                    color: #666;
                    padding: 5px 15px;
                    margin: 0 10px; /* Space between items */
                    border: none; /* Remove the border */
                    border-radius: 20px;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
                }
                .services-nav .nav-link i {
                    margin-left: 5px; /* Space between text and arrow */
                }
                .services-nav .nav-link:hover {
                    background-color: #f7f7f7;
                    text-decoration: none;
                }

                /* Flexbox for Title and Sort Dropdown in Same Row */
                .title-and-sort {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px; /* Adjust as needed */
                }
                .title-and-sort h3 {
                    font-size: 20px;
                    margin: 0;
                    flex: 1; /* Allow the title to take up space */
                }
                .sort-dropdown .dropdown-toggle {
                    font-size: 14px;
                    color: #666;
                    border: none; /* Removed the border */
                    border-radius: 0; /* Removed border-radius */
                    padding: 5px 15px;
                    white-space: nowrap; /* Prevent breaking */
                }
                .sort-dropdown .dropdown-toggle:hover,
                .sort-dropdown .dropdown-toggle:focus,
                .sort-dropdown .dropdown-toggle:active {
                    background-color: transparent !important; /* Remove hover background */
                    border: none; /* Ensure no border on hover */
                    box-shadow: none; /* Remove any shadow */
                    color: #666; /* Ensure text color stays the same */
                }
                .dropdown-menu {
                    min-width: 200px;
                }

                /* Filter Buttons Below the Title */
                .filter-buttons {
                    display: flex;
                    justify-content: flex-start;
                    margin-bottom: 20px;
                    flex-wrap: wrap; /* Allow buttons to wrap */
                }
                .filter-buttons .btn {
                    font-size: 14px;
                    padding: 5px 15px;
                    margin-right: 10px; /* Space between buttons */
                    border-radius: 20px;
                    display: flex;
                    align-items: center; /* Align icon and text */
                }
                .filter-buttons .btn i {
                    margin-right: 5px; /* Space between icon and text */
                }
                .filter-buttons .btn-outline-secondary {
                    color: #666;
                    border-color: #ccc;
                }
                .filter-buttons .btn-outline-secondary:hover {
                    background-color: #f7f7f7;
                }

                /* Breadcrumb Styling */
                .breadcrumb {
                    background-color: transparent;
                    padding: 0;
                    margin-bottom: 10px;
                    font-size: 14px;
                }
                .breadcrumb-item a {
                    color: #000;
                    text-decoration: none;
                }
                .breadcrumb-item.active {
                    color: #666;
                }
                .breadcrumb-separator {
                    margin: 0 5px;
                    color: #666;
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .search-input-group .form-control {
                        margin-bottom: 10px; /* Add space below inputs on smaller screens */
                        width: 100%; /* Make inputs take full width on smaller screens */
                    }
                    .search-input-group {
                        flex-direction: column; /* Stack inputs vertically */
                        align-items: center; /* Center items */
                    }
                    .filter-buttons {
                        justify-content: center; /* Center filter buttons on smaller screens */
                    }
                }
                `}
            </style>

            {/* Search Input */}
            <Row className="search-input-group">
                <Col md={8}>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Eateries"
                            aria-label="Eateries search"
                        />
                        <Form.Control
                            type="text"
                            placeholder="Lagos, Nigeria"
                            aria-label="Location search"
                        />
                        <Button variant="success">
                            <i className="bi bi-search"></i> {/* Bootstrap icon for search */}
                        </Button>
                    </InputGroup>
                </Col>
            </Row>

            {/* Services Navigation */}
            <Row>
                <Col>
                    <Nav className="services-nav">
                        <Nav.Link href="#">
                            Restaurants <i className="bi bi-chevron-down"></i>
                        </Nav.Link>
                        <Nav.Link href="#">
                            Home Services <i className="bi bi-chevron-down"></i>
                        </Nav.Link>
                        <Nav.Link href="#">
                            Auto Services <i className="bi bi-chevron-down"></i>
                        </Nav.Link>
                        <Nav.Link href="#">
                            More <i className="bi bi-chevron-down"></i>
                        </Nav.Link>
                    </Nav>
                </Col>
            </Row>

            {/* Breadcrumbs */}
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Review</Breadcrumb.Item>
                        <span className="breadcrumb-separator">></span>
                        <Breadcrumb.Item href="#">Lagos</Breadcrumb.Item>
                        <span className="breadcrumb-separator">></span>
                        <Breadcrumb.Item active>Eatery</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>

            {/* Title and Sort Dropdown in Same Row */}
            <Row>
                <Col>
                    <div className="title-and-sort">
                        <h3>Top 10 Best “Eatery” Near Lagos, Nigeria</h3>
                        <div className="sort-dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                    Sort: Recommended <i className="bi bi-chevron-down"></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Recommended</Dropdown.Item>
                                    <Dropdown.Item href="#">Price (Low to High)</Dropdown.Item>
                                    <Dropdown.Item href="#">Price (High to Low)</Dropdown.Item>
                                    <Dropdown.Item href="#">Rating</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Filter Buttons Below */}
            <Row>
                <Col>
                    <div className="filter-buttons">
                        <Button variant="outline-secondary">
                            <i className="bi bi-list"></i> All
                        </Button>
                        <Button variant="outline-secondary">
                            <i className="bi bi-currency-dollar"></i> Price
                        </Button>
                        <Button variant="outline-secondary">
                            <i className="bi bi-clock"></i> Open now
                        </Button>
                    </div>
                </Col>
            </Row>
      


            <div>
  <h2
    style={{
      textAlign: 'left', // Left-align the title
      marginBottom: '20px',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    }}
  >
    Most reviewed eateries in Lagos, Nigeria
  </h2>
  <Row>
    {eateries.map((eatery, index) => (
      <Col key={index} sm={7} md={4} className="d-flex align-items-stretch my-4">
        <Card
          className="mb-4"
          style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            overflow: 'hidden', // Ensure content fits within the card's borders
            width: '140%', // Ensure card takes the full width of the column
          }}
        >
          <Card.Img
            variant="top"
            src={eatery.image}
            className="img-fluid" // Make image responsive
            style={{
              width: '100%', // Full width of the card
              height: 'auto', // Let the height adjust automatically
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
          <Card.Body
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '20px',
            }}
          >
            <Card.Title
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                textAlign: 'left',
                marginBottom: '10px',
              }}
            >
              {/* Wrap the eatery name in a Link to make it clickable */}
              <Link 
                to={`/StorePage`} // Navigate to StorePage with unique eatery ID
                style={{
                  textDecoration: 'none', // Remove underline
                  color: 'inherit', // Inherit the title color
                }}
              >
                {eatery.name}
              </Link>
            </Card.Title>

            {/* Stars directly below the name */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                marginBottom: '5px',
              }}
            >
              {renderStars(eatery.rating)}
            </div>

            {/* Reviews directly below the stars */}
            <div
              style={{
                textAlign: 'left',
                marginBottom: '10px',
                fontSize: '14px',
              }}
            >
              {eatery.reviews} reviews
            </div>

            {/* Address directly below reviews */}
            <Card.Text
              style={{
                textAlign: 'left',
                marginBottom: '15px',
                fontSize: '14px',
              }}
            >
              {eatery.address}
            </Card.Text>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center-align the button and text
                marginTop: 'auto',
              }}
            >
              <Button
                variant="outline-primary"
                style={{
                  borderRadius: '20px',
                  border: '1px solid black',
                  padding: '8px 65px',
                  fontSize: '14px',
                  marginBottom: '5px',
                  color: 'black',
                }}
              >
                Get Directions
              </Button>
              <span
                style={{
                  color: 'green',
                  fontSize: '14px',
                  textAlign: 'center',
                }}
              >
                <b>Open until</b> {eatery.openUntil}
              </span>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</div>




<div>
  <h3
    className="mb-4"
    style={{ textAlign: 'left', fontWeight: 'bold' }}
  >
    All “Eateries” Results in Lagos, Nigeria.
  </h3>

  {eateryy.map((eatery, index) => (
    <Card className="mb-3 shadow-sm" key={eatery.id}>
      <Row noGutters>
        <Col md={4} xs={12}>
          {/* Image handling */}
          <Image
            src={eatery.imageUrl}
            fluid
            className="img-fluid"
            style={{
              borderRadius: '10px',
              minHeight: '200px', // Ensure a minimum height for responsiveness
              objectFit: 'cover',
              padding: '5px',
            }}
          />
        </Col>
        <Col md={8} xs={12}>
          <Card.Body>
            <Card.Title>
              <span
                style={{
                  fontWeight: 'bold',
                  fontSize: '1em',
                  marginRight: '8px',
                }}
              >
                {index + 1}.
              </span>
              <Link
                to={`/StorePage`} // Navigate to StorePage with unique eatery ID
                style={{
                  textDecoration: 'none', // Remove underline
                  color: 'inherit', // Use the current text color
                  fontSize: '1em',
                }}
              >
                {eatery.name}
              </Link>
            </Card.Title>

            {/* Star rating and reviews */}
            <Row className="align-items-center mb-1">
              <Col xs="auto">
                <div style={{ display: 'flex' }}>
                  {getStars(eatery.rating)}
                </div>
              </Col>
              <Col xs="auto" style={{ marginLeft: '10px' }}>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#333',
                  }}
                >
                  <strong>{eatery.rating}</strong> ({eatery.reviews} reviews)
                </span>
              </Col>
            </Row>

            {/* Time status */}
            <Row className="mb-2">
              <Col>
                <span style={{ color: 'green', fontWeight: 'bold' }}>
                  {eatery.status}
                </span>
              </Col>
            </Row>

            {/* Message icon and text */}
            <Row className="align-items-center mb-2">
              <Col xs="auto">
                <ChatLeftText size={20} />
              </Col>
              <Col>
                <Card.Text>
                  “Lorem ipsum dolor sit amet consectetur. At dictum purus
                  dictum euismod. Porta tellus massa scelerisque at vel
                  ultricies…”
                </Card.Text>
              </Col>
            </Row>

            {/* Get Directions button */}
            <div className="d-flex justify-content-end">
              <Button
                variant="outline-dark"
                style={{
                  color: 'black',
                  borderColor: 'black',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'black';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'black';
                }}
              >
                Get Directions
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  ))}
</div>

<br />
<div>
<Row className="justify-content-center">
        <Col xs="auto" className="d-flex align-items-center" style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {/* Internal CSS */}
          <style type="text/css">
            {`
              .custom-pagination .page-item {
                margin: 0 39px; /* Increased space between numbers for wider layout */
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







<div
      style={{
        maxWidth: '100%',
        width: '100%',
        margin: '20px auto', // Centers the container on the page for all devices
        padding: '0 15px', // Padding for smaller devices
      }}
    >
      <Container
        className="p-4"
        style={{
          border: '1px solid #ccc', // Light gray border for the main container
          borderRadius: '8px', // Rounded corners for the main container
          backgroundColor: '#fff', // Background color matching the image
          boxShadow: '0px 2px 5px rgba(0,0,0,0.1)', // Add shadow for a slight 3D effect
          padding: '30px 40px', // Padding for the main content
        }}
      >
        <Row className="align-items-center mb-3">
          <Col xs="auto">
            <FaMapMarkerAlt style={{ fontSize: '30px', color: '#000' }} />
          </Col>
          <Col>
            <h5
              style={{
                margin: '0 0 10px 0', // Spacing between the heading and subtext
                fontWeight: 'bold',
                fontSize: '20px',
              }}
            >
              Can’t find the business?
            </h5>
            <p style={{ margin: '0', color: '#666', fontSize: '16px' }}>
              Adding a business to Review is always free.
            </p>
          </Col>
          <Col xs="auto">
            <Button
              variant="light"
              style={{
                border: '1px solid #ddd', // Light gray border for button
                borderRadius: '5px', // Slightly rounded corners for the button
                fontWeight: 'bold',
                padding: '8px 16px', // Button padding adjustment
                fontSize: '14px', // Button text font size adjustment
                backgroundColor: '#f8f9fa', // Light button background
              }}
            >
              Add Business
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Feedback Section below the main container */}
      <p
        style={{
          fontSize: '14px',
          color: '#999',
          marginTop: '10px', // Keep spacing between the main content and feedback text
          marginLeft: '10px', // Same alignment as before
        }}
      >
        Got search feedback?{' '}
        <a href="#" style={{ color: '#007bff' }}>
          Help us improve
        </a>
      </p>

      
    <div fluid style={styles.container} >
    <h2 style={styles.heading}>Trending searches in Lagos, Nigeria</h2>
      <Row >
        <Col xs={12} sm={6} md={4}> {/* Responsive column for smaller devices */}
          <ul style={styles.list}>
            <li style={styles.listItem}>African Food</li>
            <li style={styles.listItem}>American food</li>
            <li style={styles.listItem}>Korean food</li>
            <li style={styles.listItem}>Pizza</li>
            <li style={styles.listItem}>Seafood</li>
            <li style={styles.listItem}>Bush meat spot</li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={4}> {/* Responsive column for smaller devices */}
          <ul style={styles.list}>
            <li style={styles.listItem}>Asian Fusion</li>
            <li style={styles.listItem}>Breakfast & Brunch</li>
            <li style={styles.listItem}>Hottest Restaurants</li>
            <li style={styles.listItem}>Caribbean</li>
            <li style={styles.listItem}>Waffles</li>
            <li style={styles.listItem}>Farms</li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={4}> {/* Responsive column for smaller devices */}
          <ul style={styles.list}>
            <li style={styles.listItem}>Kimchi Fried Rice</li>
            <li style={styles.listItem}>Chicken wings</li>
            <li style={styles.listItem}>China Buffet</li>
            <li style={styles.listItem}>Cheap Fast Food</li>
            <li style={styles.listItem}>Curly fries</li>
            <li style={styles.listItem}>Food challenge</li>
          </ul>
        </Col>
      </Row>
    </div>
    </div>







        </Container>
    );
};

export default StoreSearchpage;
