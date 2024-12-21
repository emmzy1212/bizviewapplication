import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import { updatePassword, loginUser } from '../pages/Api'; // Import necessary functions
import { useParams, useHistory } from 'react-router-dom'; // Import useHistory for navigation

const Security = () => {
  const { userId: userIdFromParams } = useParams(); // Extract userId from URL params
  const history = useHistory(); // Initialize useHistory hook for navigation
  const [showModal, setShowModal] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(null); // State for userId

  // Get the userId either from URL params or localStorage
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (userIdFromParams) {
      setUserId(userIdFromParams); // Use the userId from URL params if available
    } else if (storedUserId) {
      setUserId(storedUserId); // Otherwise, fall back to localStorage
    } else {
      setError('User not authenticated');
    }
  }, [userIdFromParams]);

  // Inline styles
  const styles = {
    container: {
      width: '80%',
      margin: '50px auto',
      textAlign: 'center',
      border: '1px solid #ccc',
      borderRadius: '7px',
      padding: '15px 15px 500px',
      marginTop: '8rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
  };

  // Toggle the modal visibility
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Handle password update form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match.');
      return;
    }

    if (!userId) {
      setError('User ID is missing.');
      return;
    }

    try {
      // Update password in backend
      const response = await updatePassword(userId, oldPassword, newPassword, confirmPassword);
      if (response.success) {
        // Clear the user session and redirect to login
        localStorage.removeItem('userId'); // Clear user session from localStorage

        // Attempt to login with new credentials
        const loginResponse = await loginUser(response.user.email, newPassword);
        if (loginResponse.status === 200) {
          alert('Password updated successfully. You are now logged in with your new password.');
          history.push('/dashboard'); // Redirect to a protected route after successful login
        } else {
          setError('Failed to log in with the new password.');
        }

        handleClose(); // Close the modal after successful password update
      } else {
        setError(response.message || 'Failed to update password');
      }
    } catch (err) {
      setError(err.message || 'Failed to update password');
    }
  };

  return (
    <div style={styles.container}>
      <Container className="mt-9">
        <h3 className="text-center mb-4">Security</h3>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card>
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title className="mb-0">Update Password</Card.Title>
                </div>
                <Button
                  variant="outline-success"
                  className="d-flex align-items-center"
                  onClick={handleShow}
                >
                  Edit
                  <span className="ms-2">
                    <i className="bi bi-pencil"></i>
                  </span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal for password update */}
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Update Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formOldPassword">
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter old password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formNewPassword" className="mt-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            {error && <div className="text-danger mt-2">{error}</div>}

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Security;





// import React, { useState, useEffect } from 'react';
// import { Card, Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
// import { updatePassword } from '../Pages/Api'; // Import your updatePassword function
// import { useParams } from 'react-router-dom'; // If using URL params for user ID

// const Security = () => {
//   const { userId: userIdFromParams } = useParams(); // Extract userId from URL params
//   const [showModal, setShowModal] = useState(false);
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [userId, setUserId] = useState(null); // State for userId

//   // Get the userId either from URL params or localStorage
//   useEffect(() => {
//     const storedUserId = localStorage.getItem('userId');
//     if (userIdFromParams) {
//       setUserId(userIdFromParams); // Use the userId from URL params if available
//     } else if (storedUserId) {
//       setUserId(storedUserId); // Otherwise, fall back to localStorage
//     } else {
//       setError('User not authenticated');
//     }
//   }, [userIdFromParams]);

//   // Inline styles
//   const styles = {
//     container: {
//       width: '80%',
//       margin: '50px auto',
//       textAlign: 'center',
//       border: '1px solid #ccc',
//       borderRadius: '7px',
//       padding: '15px 15px 500px',
//       marginTop: '8rem',
//       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     },
//   };

//   // Toggle the modal visibility
//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

//   // Handle password update form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword === confirmPassword) {
//       setError('New password changed successfully.');
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       setError('New password and confirm password do not match.');
//       return;
//     }

//     if (!userId) {
//       setError('User ID is missing.');
//       return;
//     }

//     try {
//       const response = await updatePassword(userId, oldPassword, newPassword);
//       if (response.success) {
//         alert('Password updated successfully');
//         handleClose(); // Close the modal after successful password update
//       } else {
//         setError(response.message || 'Failed to update password');
//       }
//     } catch (err) {
//       setError(err.message || 'Failed to update password');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <Container className="mt-9">
//         <h3 className="text-center mb-4">Security</h3>
//         <Row className="justify-content-center">
//           <Col xs={12} md={8} lg={6}>
//             <Card>
//               <Card.Body className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <Card.Title className="mb-0">Update Password</Card.Title>
//                 </div>
//                 <Button
//                   variant="outline-success"
//                   className="d-flex align-items-center"
//                   onClick={handleShow}
//                 >
//                   Edit
//                   <span className="ms-2">
//                     <i className="bi bi-pencil"></i>
//                   </span>
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       {/* Modal for password update */}
//       <Modal show={showModal} onHide={handleClose} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Update Password</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formOldPassword">
//               <Form.Label>Old Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter old password"
//                 value={oldPassword}
//                 onChange={(e) => setOldPassword(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formNewPassword" className="mt-3">
//               <Form.Label>New Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter new password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="formConfirmPassword" className="mt-3">
//               <Form.Label>Confirm New Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Confirm new password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             {error && <div className="text-danger mt-2">{error}</div>}

//             <Button variant="primary" type="submit" className="mt-3">
//               Submit
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default Security;


