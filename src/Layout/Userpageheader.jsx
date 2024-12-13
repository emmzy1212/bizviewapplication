import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert'; // Importing SweetAlert for user notifications
import logo from '../Assets/logototurn-removebg-preview.png'; // Import the image as 'logo'
import { deleteUserAccount } from '../Pages/Api'; // Import the delete account API function

const Userpageheader = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [userId, setUserId] = useState(localStorage.getItem('userId')); // Retrieve user ID from local storage

  const dropdownItemStyle = {
    backgroundColor: '#e6fff2',
    color: '#000',
    padding: '10px 20px',
    fontSize: '1rem',
    borderBottom: '1px solid #ddd',
    transition: 'background-color 0.2s ease-in-out',
  };

  const dropdownItemHoverStyle = {
    ...dropdownItemStyle,
    backgroundColor: '#013220',
    color: '#fff',
  };

  const logoutItemStyle = {
    ...dropdownItemStyle,
    color: 'red',
  };

  const logoutItemHoverStyle = {
    ...logoutItemStyle,
    backgroundColor: '#013220',
    color: '#fff',
  };

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const updateId = () => {
      setUserId(localStorage.getItem('userId'));
    };

    updateId();
    window.addEventListener('storage', updateId);
    return () => {
      window.removeEventListener('storage', updateId);
    };
  }, []);

  useEffect(() => {
    if (userId) {
      if (location.pathname === '/') {
        history.push('/');
      }
    } else {
      if (location.pathname !== '/') {
        history.push('/Signin');
      }
    }
  }, [userId, location, history]);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setUserId(null);
    swal("Logged Out", "You have been successfully logged out.", "success");
    history.push('/');
  };

  const handleDeleteAccount = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this account!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // Assume email and password are required for deletion
        const email = localStorage.getItem('userEmail'); // Retrieve email if stored in localStorage
        const password = prompt("Please enter your password to confirm:");

        if (!password) {
          swal("Cancelled", "Account deletion cancelled.", "error");
          return;
        }

        deleteUserAccount(email, password)
          .then((response) => {
            swal("Deleted!", response.message, "success");
            localStorage.removeItem('userId');
            setUserId(null);
            history.push('/');
          })
          .catch((error) => {
            swal("Error", error.message || "An error occurred while deleting the account.", "error");
          });
      }
    });
  };

  return (
    <Navbar expand="lg" className="custom-header">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="BizView Solutions Logo"
            className="brand-logo"
            style={{ height: '80px', width: 'auto' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-links d-flex align-items-center">
            <Nav.Link as={Link} to="/" className="custom-nav-link" style={{ fontSize: '1rem', color: '#fff' }}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/Reviewpage" className="custom-nav-link" style={{ fontSize: '1rem', color: '#fff' }}>
              REVIEWS
            </Nav.Link>
            <Nav.Link as={Link} to="/Aboutus" className="custom-nav-link" style={{ fontSize: '1rem', color: '#fff' }}>
              ABOUT US
            </Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                className="custom-nav-link"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '1rem',
                  color: '#fff',
                  padding: 0,
                }}
              >
                Profile
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link} to="/Profile"
                  style={hoveredItem === 'my-profile' ? dropdownItemHoverStyle : dropdownItemStyle}
                  onMouseEnter={() => setHoveredItem('my-profile')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  My Profile
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link} to="/Security"
                  style={hoveredItem === 'security' ? dropdownItemHoverStyle : dropdownItemStyle}
                  onMouseEnter={() => setHoveredItem('security')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  Security
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link} to="/Notification"
                  style={hoveredItem === 'notifications' ? dropdownItemHoverStyle : dropdownItemStyle}
                  onMouseEnter={() => setHoveredItem('notifications')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  Notifications
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link} to="/ContactSupport"
                  style={hoveredItem === 'contact-support' ? dropdownItemHoverStyle : dropdownItemStyle}
                  onMouseEnter={() => setHoveredItem('contact-support')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  Contact Support
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  style={hoveredItem === 'delete-account' ? dropdownItemHoverStyle : dropdownItemStyle}
                  onMouseEnter={() => setHoveredItem('delete-account')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={handleDeleteAccount}
                >
                  Delete Account
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  style={hoveredItem === 'logout' ? logoutItemHoverStyle : logoutItemStyle}
                  onMouseEnter={() => setHoveredItem('logout')}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={handleLogout}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Userpageheader;
