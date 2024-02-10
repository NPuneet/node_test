const mongoose = require("mongoose");

// conncetion for mongo
const connectMongoDB = async (url) => {
  return mongoose.connect(url);
};
module.exports = {
    connectMongoDB,
};
