import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {type: Number, required:true},
    title:{type:String, required: true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    category:{type:String,require:true},
    image:{type:String,required:true},


})

const Product = mongoose.model("Product",productSchema);

const databaseModel = {
    Product
}
export default databaseModel