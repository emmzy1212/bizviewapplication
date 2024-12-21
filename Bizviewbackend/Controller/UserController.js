import User from "../Model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register User 
// we use req to req from the body and res to receive responds
export const registerUser = async (req, res) => {
  try {
    // Extract user input from the request body
    const { email, password, confirmpassword } = req.body;

    // Check if any of the required fields are missing
    if (!email || !password || !confirmpassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Function to validate the password's strength
    const validatePassword = (password) => {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!.@#$%^&*()_+])[A-Za-z\d!@#$.%^&*()_+]{8,}$/;
      return regex.test(password);
    };

    // Check if the password meets the required strength criteria
    if (!validatePassword(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      });
    }

    // Ensure that the password and confirm password match
    if (password !== confirmpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the provided information
    const newUser = await User.create({
      email,
      password: hashedPassword, // Store the hashed password
    });

    // Respond with a success message and the newly created user data
    return res.status(200).json({
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error)
    // Handle any errors that occur during the process
    return res.status(500).json({
      message: "Error creating new user",
      error: error.message,
      
    });
  }
};



// ..................................
// Login controller
export const LoginUser = async (req, res) => {
  const { password, email } = req.body;

  // Validate input fields
  if (!password || !email) {
    return res.status(400).json({
      message: "Please enter all required fields",
    });
  }
// then we try to check if email exist
  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found. Please create an account",
      });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Generate JWT token for the authenticated user
    // this is what prints the token and expiration of the token
    // after its get the token its will send it to our middleware verifyjwt to verify it
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET, // Use the secret from environment variables
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Set the token in an HTTP-only cookie
    // where i also handled the cookies
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Only send cookies over HTTPS in production
        sameSite: 'Strict', // Adjust depending on your needs ('Strict', 'Lax', or 'None')
        maxAge: 3600000, // 1 hour
      });

    // Respond with success message and user information (excluding password)
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    // Handle any errors that occur during the process
    return res.status(500).json({
      message: "Internal server error. Unable to log in",
      error: error.message,
    });
  }
};




// Get All Users
export const getAllUsers = async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find({}, '-password'); // Exclude password from the response

    // Respond with the list of users
    return res.status(200).json({
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    // Handle any errors that occur during the process
    return res.status(500).json({
      message: "Error retrieving users",
      error: error.message,
    });
  }
};


export const getOneUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User found", user: user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }

};


// Controller to delete user account with email and password verification
export const deleteUserAccount = async (req, res) => {
  const { email, password } = req.body; // Get email and password from request body

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Delete the user
    await User.findByIdAndDelete(user._id);
    res.status(200).json({ message: 'Account deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while deleting the account' });
  }
};


export const updatePassword = async (req, res) => {
  const { userId, oldPassword, newPassword, confirmPassword } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the old password matches
    const isMatch = await user.matchPassword(oldPassword);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect old password' });
    }

    // Ensure new passwords match
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: 'New passwords do not match' });
    }

    // Update the password
    user.password = newPassword;
    await user.save();

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
