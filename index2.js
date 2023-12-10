const express = require('express');
const app = express();
const mongoose = require('mongoose');
const foodItemsRouter = require('./foodItemsRouter');

mongoose.connect('mongodb+srv://sp22bse085:RTDX$7768@cluster0.m7l1mbh.mongodb.net/menu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/fooditems', foodItemsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
