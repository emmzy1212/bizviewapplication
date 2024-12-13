import React, { useState } from 'react'; 
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import logo from '../Assets/logototurn-removebg-preview.png'; // Import the image as 'logo'
import { loginUser } from './Api';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  
  // Inline styles
  const styles = {
    background: {
      backgroundColor: '#3f4b3f', // Dark green background
      minHeight: '100vh', // Make sure it covers full height on all devices
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '15px', // Padding around the form for smaller devices
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%', // Ensure full width container for smaller screens
    },
    formContainer: {
      backgroundColor: '#fff',
      borderRadius: '20px',
      padding: '40px',
      paddingBottom: '60px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px', // Limit maximum width for larger screens
      textAlign: 'center',
    },
    logoText: {
      fontWeight: 'bold',
      color: 'green',
      marginBottom: '20px',
    },
    input: {
      marginBottom: '15px',
      position: 'relative', // Ensures the icon is positioned relative to the input
      textAlign: 'left',
    },
    inputField: {
      height: '45px',
      paddingRight: '50px', // Extra padding for the icon
      fontWeight: 'bold',
      width: '100%', // Ensure input fields are responsive
      maxWidth: '100%',
    },
    buttonSignin: {
      width: '100%',
      fontSize: '16px', 
      padding: '10px',  
      marginBottom: '15px',
      backgroundColor: '#2e7d32',
      borderColor: '#28a745',
      fontWeight: 'bold',
    },
    logo: {
      marginBottom: '15px',
      width: '80px', 
      height: 'auto',
    },
    icon: {
      position: 'absolute',
      right: '15px', // Keep the icon aligned to the right
      top: '50%', 
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      color: '#6c757d',
    },
    label: {
      marginBottom: '5px',
      fontWeight: '600',
      fontSize: '14px', 
      color: '#000',
    },

    errorMessage: {
      color: 'red',
      marginBottom: '10px',
    },

  };

 const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      swal("Validation Error", "Please fill in all fields.", "warning");
      return;
    }

    try {
      const response = await loginUser(email, password);

      console.log(response.data);

      if (response.status === 200) {
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user.username);
        // Login successful
        swal("Success!", "Login successful. Redirecting to home...", "success").then(() => {
          history.push('/');
        });
      } else {
        // Show error alert based on the response
        swal("Oops!", response.data.message || "An error occurred. Please try again.", "error");
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Login error:", error);
      swal("Error", "An error occurred while trying to log in. Please try again.", "error");
    }
  };

  return (
    <div style={styles.background}>
      <Container fluid style={styles.container}>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={5} style={styles.formContainer}>
            {/* Logo and text */}
            <div>
              <img
                src={logo} // Replace with your logo image source
                alt="BizView Solutions"
                style={styles.logo}
              />
            </div>

            <Form onSubmit={handleLogin}>
              {error && <p style={styles.errorMessage}>{error}</p>}
              
              <Form.Group controlId="formEmail" style={styles.input}>
                <Form.Label style={styles.label}>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.inputField}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" style={styles.input}>
                <Form.Label style={styles.label}>Password</Form.Label>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.inputField}
                  required
                />
                {/* Password Visibility Toggle Icon */}
                {showPassword ? (
                  <MdVisibilityOff style={styles.icon} onClick={togglePasswordVisibility} />
                ) : (
                  <MdVisibility style={styles.icon} onClick={togglePasswordVisibility} />
                )}
              </Form.Group>

              <Button
                type="submit"
                variant="success"
                style={styles.buttonSignin}
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signin;
