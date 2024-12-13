import React, { useState } from 'react'; 
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import logo from '../Assets/logototurn-removebg-preview.png'; // Import the image as 'logo'
import { registerUser } from '../Pages/Api'; // Import the registerUser function for API calls
import swal from 'sweetalert'; // Import SweetAlert for alerts
import { useHistory } from 'react-router-dom'; // Import useHistory for page navigation


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false); // State for loading spinner
  const history = useHistory(); // Initialize useHistory to handle navigation

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Check if all fields are filled
    if (!email || !password || !confirmPassword) {
      swal("Incomplete Form", "Please fill in all fields.", "warning");
      return; // Exit the function to prevent further processing
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      swal("Password Mismatch", "The passwords do not match. Please try again.", "error");
      return;
    }
  
    try {
      // Log the user data before sending the request
      console.log('User Data:', { email, password, confirmpassword: confirmPassword });
  
      // Prepare user data
      const userData = { email, password, confirmpassword: confirmPassword };
  
      // Call the registerUser function to send a POST request to the backend
      await registerUser(userData);
  
      // Show success message and redirect to the Signin page
      swal("Success!", "Signup successful. Redirecting to Sign In page...", "success").then(() => {
        history.push('/Signin');
      });
    } catch (error) {
      // Handle errors and show error message
      console.log('API Error:', error.response?.data || error.message);
      swal("Signup Failed", error.message || "Something went wrong. Please try again.", "error");
    }
  };

  // Inline styles
  const styles = {
    background: {
      backgroundColor: '#3f4b3f', // Dark green background
      minHeight: '100vh', // Adjusts for responsive height
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px', // Adds some padding to prevent edge clipping on small screens
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    formContainer: {
      backgroundColor: '#fff',
      borderRadius: '20px',
      padding: '40px 30px', // Added padding
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      width: '100%', // Full width on smaller devices
      maxWidth: '400px', // Restrict the maximum width on larger screens
      minWidth: '280px', // Ensure the form is not too small
      textAlign: 'center',
      marginTop: '60px',
    },
    logoText: {
      fontWeight: 'bold',
      color: 'green',
      marginBottom: '20px',
    },
    input: {
      marginBottom: '15px',
      position: 'relative',
      textAlign: 'left', // Ensure the label is aligned to the left
    },
    label: {
      marginBottom: '5px', // Space between label and input
      fontWeight: '400',   // Make it regular weight, not bold
      fontSize: '13px',    // Smaller font size
      color: '#000',
    },
    inputField: {
      height: '45px',
      paddingRight: '40px',
    },
    buttonGoogle: {
      width: '100%',
      fontSize: '16px',
      padding: '10px',
      marginBottom: '15px',
      borderColor: '#000',
    },
    buttonFacebook: {
      width: '100%',
      fontSize: '16px',
      padding: '10px',
      backgroundColor: '#2e7d32',
      borderColor: '#28a745',
    },
    buttonSubmit: {
      width: '100%',
      fontSize: '16px',
      padding: '10px',
      backgroundColor: '#28a745', // Light green button
      borderColor: '#28a745',
      marginTop: '15px',
    },
    logo: {
      marginBottom: '15px',
      width: '80px',  // Reduced width for smaller devices
      height: 'auto',
    },
    icon: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      color: '#6c757d',
    },
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div style={styles.background}>
      <Container fluid style={styles.container}>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={5} style={styles.formContainer}>
            {/* Logo and text */}
            <div>
              <img
                src={logo} // Replace with your logo image source
                alt="BizView Solutions"
                style={styles.logo}
              />
            </div>

            {/* Form */}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" style={styles.input}>
                <Form.Label style={styles.label}>Email</Form.Label>
                <Form.Control type="email" style={styles.inputField} value={email}
                onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formPassword" style={styles.input}>
                <Form.Label style={styles.label}>Password</Form.Label>
                <Form.Control 
                  type={showPassword ? 'text' : 'password'} 
                  style={styles.inputField} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* Password Visibility Icon */}
                {showPassword ? (
                  <MdVisibilityOff 
                    style={styles.icon} 
                    onClick={togglePasswordVisibility} 
                  />
                ) : (
                  <MdVisibility 
                    style={styles.icon} 
                    onClick={togglePasswordVisibility} 
                  />
                )}
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" style={styles.input}>
                <Form.Label style={styles.label}>Confirm Password</Form.Label>
                <Form.Control 
                  type={showConfirmPassword ? 'text' : 'password'} 
                  style={styles.inputField} 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {/* Confirm Password Visibility Icon */}
                {showConfirmPassword ? (
                  <MdVisibilityOff 
                    style={styles.icon} 
                    onClick={toggleConfirmPasswordVisibility} 
                  />
                ) : (
                  <MdVisibility 
                    style={styles.icon} 
                    onClick={toggleConfirmPasswordVisibility} 
                  />
                )}
              </Form.Group>
              

              <Button variant="outline-dark" style={styles.buttonGoogle}>
                Continue with Google
              </Button>

              <Button variant="success" style={styles.buttonFacebook}>
                Continue with Facebook
              </Button>

              {/* Submit Button */}
              <Button 
                variant="primary" 
                type="submit" 
                style={styles.buttonSubmit}
                disabled={loading} // Optionally disable the button when loading
              >
                {loading ? 'Signing up...' : 'Sign Up'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
