const FoodModel= require("./models/FoodModel");

const createFoodItem=async(id,name,description)=>{
    console.log("Create new food item")
    let FoodItems= new FoodItems();
    FoodItems.id=id;
   FoodItems.name=name;
  FoodItems.description=description
    await FoodItems.save();
    return FoodItems
}

const updateFoodItem = async (_id, name, description) => {
    console.log("Update Food Item");
    let foodItem = await FoodModel.findById(_id);
    foodItem.name = name;
    foodItem.description = description;

    await foodItem.save();
    return foodItem;
};

const getAllFoodItems = async () => {
    let foodItems = await FoodModel.find();
    return foodItems;
}

const deleteFoodItem = async (_id) => {
    let foodItem = await FoodModel.findByIdAndDelete(_id);
    return foodItem;
}

module.exports.createFoodItem = createFoodItem; // Assuming you already have createFoodItem function defined
module.exports.getAllFoodItems = getAllFoodItems;
module.exports.deleteFoodItem = deleteFoodItem;
module.exports.updateFoodItem = updateFoodItem;
