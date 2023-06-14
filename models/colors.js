import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
    type:{type:String,required:true},
    name:{type:Array,required:true}
}); 

const Color = mongoose.model("color",colorSchema);

export {Color}; 