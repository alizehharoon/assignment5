const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const { createFoodItem, getAllFoodItems, deleteFoodItem, updateFoodItem } = require('./FoodItemsOperations');

mongoose
  .connect('mongodb+srv://admin:admin123@cluster0.thui9dw.mongodb.net/menu')
  .then(async () => {
    console.log('Connected to Mongoose');

    let foodItem = await createFoodItem(1, 'Pizza', 'Italian');
    console.log(foodItem);

    let allFoodItems = await getAllFoodItems();
    console.log(allFoodItems);

    console.log(await deleteFoodItem('656f4c7101a127670ff7879b')); 

    let updatedFoodItem = await updateFoodItem('656f4c7101a127670ff7879b', 'Burger', 'Fast food');
    console.log(updatedFoodItem);
  })
  .catch((err) => {
    console.log('Error detected');
    console.log(err);
  });

app.listen(3000);
