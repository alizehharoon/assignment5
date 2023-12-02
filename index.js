const express = require('express')
const app = express()
app.use(express.json())


const foodItems = {
    1: "Pizza",
    2: "Burger",
    3: "Salad",
    4: "Pasta",
    5: "Sushi",
    6: "Ice Cream",
    7: "Fruit Salad",
  };

  app.get("/api/foodItems", function (req, res) {
    res.send(foodItems);
  });
  app.get("/api/foodItems/:id", function (req, res) {
    const itemId = req.params.id;
    const item = foodItems[itemId];
  
    if (!item) {
      return res.status(400).send("Food item not found");
    }
  
    res.send(item);
  });

  app.put("/api/foodItems/:id", function (req, res) {
    const itemId = req.params.id;
    if (!foodItems[itemId]) {
      return res.status(400).send("Food item not found");
    }
  
    foodItems[itemId] = req.body.name;
    res.send(foodItems);
  });

  app.delete("/api/foodItems/:id", function (req, res) {
    const itemId = req.params.id;
  
    if (!foodItems[itemId]) {
      return res.status(400).send("Food item not found");
    }
  
    delete foodItems[itemId];
    res.send(foodItems);
  });
  
  app.post("/api/foodItems", function (req, res) {
    const newItemId = Object.keys(foodItems).length + 1;
    const newItemName = req.body.name;
  
    foodItems[newItemId] = newItemName;
    res.send(foodItems);
  });

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)