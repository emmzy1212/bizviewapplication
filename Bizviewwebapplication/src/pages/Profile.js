import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";

const Profile = () => {
  // State to handle modal visibility and input data for Personal Info
  const [showPersonalInfoModal, setShowPersonalInfoModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Taofeeq",
    lastName: "Jubril",
    email: "ghjnjfndjkv@gmail.com",
    phone: "0815 674 4655",
  });

  const [address, setAddress] = useState("1st floor, the city mall, beside TBS, Onikan");
  const [fullName, setFullName] = useState("Taofeeq Jubril"); // Editable full name state
  const [location, setLocation] = useState("Lagos, Nigeria");
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/80"); // Initial placeholder image

  // Fetch current location using Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // You can use a reverse geocoding API here to get the location name from lat/lon
        // For this example, we'll just use the latitude and longitude directly
        setLocation(`Latitude: ${lat}, Longitude: ${lon}`);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleClosePersonalInfo = () => setShowPersonalInfoModal(false);
  const handleCloseAddress = () => setShowAddressModal(false);
  const handleCloseNameModal = () => setShowNameModal(false);

  const handleShowPersonalInfo = () => setShowPersonalInfoModal(true);
  const handleShowAddress = () => setShowAddressModal(true);
  const handleShowNameModal = () => setShowNameModal(true);

  const handleSavePersonalInfo = () => {
    console.log("Updated Personal Info:", personalInfo);
    handleClosePersonalInfo();
  };

  const handleSaveAddress = () => {
    console.log("Updated Address:", address);
    handleCloseAddress();
  };

  const handleSaveName = () => {
    console.log("Updated Full Name:", fullName);
    handleCloseNameModal();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set the image once loaded
      };
      reader.readAsDataURL(file);
    }
  };

  const cardStyle = {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "20px",
  };

  const sectionTitleStyle = {
    fontWeight: "bold",
    marginBottom: "15px",
  };

  const textMutedStyle = {
    color: "#6c757d",
  };

  const styles = {
    container: {
      margin: "50px auto",
      padding: "25px 25px 100px",
      marginTop: "8rem",
    },
    firstborder: {
      padding: "25px 25px 300px",
    },
  };

  return (
    <Container style={styles.container}>
      <Card className="p-4" style={styles.firstborder}>
        <h3 className="text-center mb-4">My Profile</h3>

        {/* Profile Section */}
        <Card style={cardStyle}>
          <Row className="align-items-center">
            <Col xs={3} sm={2} className="text-center">
              <div>
                {/* Image Upload Area */}
                <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="img-fluid"
                    style={{ borderRadius: "50%" }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      color: "#007bff",
                      marginTop: "8px",
                    }}
                  >
                    Upload Image
                  </div>
                </label>
                <input
                  type="file"
                  id="image-upload"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </Col>
            <Col xs={9} sm={6}>
              <h5>{fullName}</h5> {/* Editable Full Name */}
              <p style={textMutedStyle}>{location}</p> {/* Display current location */}
            </Col>
            <Col xs={12} sm={4} className="text-end">
              <Button variant="outline-secondary" size="sm" onClick={handleShowNameModal}>
                Edit <i className="bi bi-pencil"></i>
              </Button>
            </Col>
          </Row>
        </Card>

        {/* Personal Information */}
        <Card style={cardStyle}>
          <h5 style={sectionTitleStyle}>Personal Information</h5>
          <Row className="mb-2">
            <Col xs={6}>
              <strong>First Name</strong>
              <p>{personalInfo.firstName}</p>
            </Col>
            <Col xs={6}>
              <strong>Last Name</strong>
              <p>{personalInfo.lastName}</p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={6}>
              <strong>Email Address</strong>
              <p>{personalInfo.email}</p>
            </Col>
            <Col xs={6}>
              <strong>Phone</strong>
              <div className="d-flex justify-content-between align-items-center">
                <span>{personalInfo.phone}</span>
                <Button variant="outline-secondary" size="sm" onClick={handleShowPersonalInfo}>
                  Edit <i className="bi bi-pencil"></i>
                </Button>
              </div>
            </Col>
          </Row>
        </Card>

        {/* Contact Address */}
        <Card style={cardStyle}>
          <h5 style={sectionTitleStyle}>Contact Address</h5>
          <p style={textMutedStyle}>Home address information</p>
          <Row className="align-items-center">
            <Col xs={9}>
              <i className="bi bi-geo-alt"></i> {address}
            </Col>
            <Col xs={3} className="text-end">
              <Button variant="outline-secondary" size="sm" onClick={handleShowAddress}>
                Edit <i className="bi bi-pencil"></i>
              </Button>
            </Col>
          </Row>
        </Card>
      </Card>

      {/* Modal for Editing Name */}
      <Modal show={showNameModal} onHide={handleCloseNameModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Full Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseNameModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveName}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Editing Personal Information */}
      <Modal show={showPersonalInfoModal} onHide={handleClosePersonalInfo}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Personal Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={personalInfo.firstName}
                onChange={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="editLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={personalInfo.lastName}
                onChange={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="editEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={personalInfo.email}
                onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="editPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={personalInfo.phone}
                onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePersonalInfo}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSavePersonalInfo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Editing Address */}
      <Modal show={showAddressModal} onHide={handleCloseAddress}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddress}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveAddress}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Profile;
