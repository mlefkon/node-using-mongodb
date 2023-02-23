import mongoose, { modelNames } from 'mongoose';

schema = new mongoose.Schema();

// "name" item with String type, and make this one required.
// "description" item with String type, and make this one required.
// "category" item with String type.
// "price" item with Number type.
// "created_date" item with Date type, and make this with a default value of Date.now