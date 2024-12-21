import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // Assuming you are using cookies to store the token

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user info to the request object
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }

  return next(); // Proceed to the next middleware/route handler
};
