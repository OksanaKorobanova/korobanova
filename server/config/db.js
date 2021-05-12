const mongoose = require('mongoose');
const db = 'mongodb+srv://' + process.env.REACT_APP_DB_USER + ':' + process.env.REACT_APP_DB_PASS + '@cluster0.ctfgf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB is Connected...');
  } catch (err) {
    console.log('DB err' + db);
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
