module.exports = {
    port: process.env.PORT || 5000, // Port where Express will run
    mongoURI: process.env.MONGODB_URI, // Connection string for MongoDB Atlas
    jwtSecret: process.env.JWT_SECRET, // Secret used to sign JWT tokens
    nodeEnv: process.env.NODE_ENV || "development", // Environment variable to set the environment (development, production, etc.) 
  };