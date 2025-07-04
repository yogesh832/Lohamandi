const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://upadhayayyogesh832:123freelanceproject123@cluster0.ga6zbb8.mongodb.net/Lohamandi?retryWrites=true&w=majority&appName=Cluster0", {
     
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

module.exports = dbConnection;
