const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {
  createFoodItem,
  getAllFoodItems,
  deleteFoodItem,
  updateFoodItem,
} = require('./FoodItemsOperations');

router.use(bodyParser.json());

router.post('/', async (req, res) => {
  try {
    const { itemId, name, cuisine } = req.body;
    const newFoodItem = await createFoodItem(itemId, name, cuisine);
    res.json(newFoodItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const allFoodItems = await getAllFoodItems();
    res.json(allFoodItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const deletedFoodItem = await deleteFoodItem(itemId);
    res.json(deletedFoodItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const { name, cuisine } = req.body;
    const updatedFoodItem = await updateFoodItem(itemId, name, cuisine);
    res.json(updatedFoodItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
