import express from 'express';
import { verifyToken } from '../middleware/VerifyJwt.js'; // Adjust the path as needed


const router = express.Router();

import {
  registerUser,
  LoginUser,
  getAllUsers,
  getOneUserById,
  deleteUserAccount,
  updatePassword
} from '../Controller/UserController.js';

// Public routes (no token required)
router.post('/register', registerUser);
router.post('/login', LoginUser);
// Update password route
router.put('/updatepassword', updatePassword);
router.get('/getallusers', getAllUsers);
router.get('/getoneuser/:id', getOneUserById);
router.post('/delete', deleteUserAccount);

// // Protected routes (token required)
// router.use(verifyToken); // Applies token verification to all routes below

// // Example protected route
// router.get('/protected', (req, res) => {
//   res.send('This is a protected route');
// });

// router.get('/user' getSingleUser)


// router.get('/getallusers', getAllUsers);
// router.get('/user/:id', getOneUserById);


export default router;
