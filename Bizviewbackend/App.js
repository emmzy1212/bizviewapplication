import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import router from './Route/Routes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend origin
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions));

// Middleware to parse cookies
app.use(cookieParser());

// Middleware to parse JSON and URL-encoded form data, to be able to access our json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route handlers
app.use('/', router);


// 404 handler for all unmatched routes
app.get('*', (req, res) => {
  res.status(404).send('<h2>Page not found</h2>');
});


// MongoDB connection function
const connectToMongoDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    });
    console.log('Connected to MongoDB');
    return connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Start the server after connecting to MongoDB
const startServer = async () => {
  try {
    await connectToMongoDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

startServer();




// Serve static files from the uploads directory

export default app;
