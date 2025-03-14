// Import the axios library, which allows us to make HTTP requests from the browser or Node.js
import axios from 'axios';


// Base URL for the backend API ... this handle signin part of backend
const API_BASE_URL = 'https://bizviewapplication.onrender.com'; // Replace with your backend URL




export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; // Assuming the response contains the user data
  } catch (error) {
    // Log the error response for debugging
    console.error('API error:', error.response);
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};


export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`,{ email, password }, {
      withCredentials: true, // Send cookies with the request if your backend uses cookies for authentication
    });
    return response; // Return the entire response object
  } catch (error) {
    if (error.response) {
      // Server-side error
      return error.response; // Return the error response so it can be handled in the React component
    } else {
      // Client-side error or network issue
      throw new Error("Network Error");
    }
  }
};


export const deleteUserAccount = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/delete`, { email, password });
    return response.data; // Returns the response from the backend
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Network error' };
  }
};



// Function to handle password update
export const updatePassword = async (userId, oldPassword, newPassword, confirmPassword) => {
  try {
    // Ensure the new password and confirm password match
    if (newPassword !== confirmPassword) {
      throw new Error('New password and confirm password do not match.');
    }

    const response = await axios.put(`${API_BASE_URL}/updatepassword`, {
      userId,
      oldPassword,
      newPassword,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data; // Assuming the response contains the updated user data or a success message
  } catch (error) {
    console.error('Error updating password:', error.response || error.message);
    throw new Error(error.response?.data?.message || error.message || 'Something went wrong');
  }
};






// Function to handle user registration
// This function takes `userData` as a parameter which i will use in the signup page, which is an object containing the user information
// export const registerUser = async (email, password, confirmpassword) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/register`, {
//       email,
//       password,
//       confirmpassword,
//     });

//     return response.data; // Return the server response data (e.g., success message and user data)
//   } catch (error) {
//     console.log(error)
//     // We throw this error so that the calling function (e.g., the signup form) can handle it.
//     throw error.response.data;
//   }
// };





// Function to handle sign-in
// the export signin is what i will use in my signin page

// export const signIn = async (email, password) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/login`, { email, password }, {
//         withCredentials: true, // Send cookies with the request if your backend uses cookies for authentication
//       });
//       return response; // Return the entire response object
//     } catch (error) {
//       if (error.response) {
//         // Server-side error
//         return error.response; // Return the error response so it can be handled in the React component
//       } else {
//         // Client-side error or network issue
//         throw new Error("Network Error");
//       }
//     }
//   };


