import User from "../Model/UserModel.js";
// import bcrypt from "bcrypt";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register User


const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-])[A-Za-z\d!@#$%^&*()_+\-]{8,}$/;
  return regex.test(password);
};





export const registerUser = async (req, res) => {
  try {
    let { email, password, confirmpassword } = req.body;

    if (!email || !password || !confirmpassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    email = email.trim().toLowerCase(); // Trim spaces & lowercase email

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (!validatePassword(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      });
    }

    if (password !== confirmpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({
      message: "User registered successfully",
      data: { id: newUser._id, email: newUser.email },
    });
  } catch (error) {
    console.error("Error in registerUser:", error);
    return res.status(500).json({ message: "Internal server error. Please try again later." });
  }
};


// login


export const LoginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all required fields" });
    }

    email = email.trim().toLowerCase(); // Trim spaces & lowercase email

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found. Please create an account" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is missing from environment variables.");
      return res.status(500).json({ message: "Server error. Please try again later." });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 3600000, // 1 hour
    });

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
      },
      token, // Send token in response if needed for frontend auth
    });
  } catch (error) {
    console.error("Error in loginUser:", error);
    return res.status(500).json({ message: "Internal server error. Please try again later." });
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
