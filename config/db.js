const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds155424.mlab.com:55424/heroku_sjx4dl0r' || process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    console.log(`MongoDB connected to: ${conn.connection.host}`.green.bold);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

}

module.exports = connectDB;