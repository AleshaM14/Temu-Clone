import mongoose from "mongoose"; //mongoose is an ODM (Object Data Modeling) library for MongoDB.

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {  //Connects to the database using the URI in your .env file.
      ssl: true, // Forces a secure connection (TLS/SSL) for encrypted communication.
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);   // Exits the process with a failure code if the connection fails.
  }
};

export default connectDB;



/* Summary:

This file is responsible for establishing the connection to MongoDB before your server starts serving requests.

Without this, your app cannot read or write product or user data.

Using async/await and try/catch ensures errors are handled gracefully and server doesn’t crash silently. */