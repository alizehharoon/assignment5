const mongoose=require("mongoose");

const FoodSchema=mongoose.Schema({
    
    id: { type: Number, required: true },
    name: String,
    description:String,

});

const FoodModel= mongoose.model("FoodItems",FoodSchema);
module.exports=FoodModel;
