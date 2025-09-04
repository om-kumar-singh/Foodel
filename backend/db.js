const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://prajwaljoshi51:Unpredictable00@cluster0.hrwzd.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'


async function mongoDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log('Successfully connected to the database');
    const fetched_data = mongoose.connection.db.collection("food_items");
    const food_category = mongoose.connection.db.collection("food_category");
    
    let newData1 = await food_category.find({}).toArray();
    let newData2 = await fetched_data.find({}).toArray();
    
    global.food_category = newData1;
    global.food_items = newData2;


  } catch (error) {
    console.error('Error connecting to the database', error);
    process.exit(1);
  }
}

module.exports = mongoDB;
