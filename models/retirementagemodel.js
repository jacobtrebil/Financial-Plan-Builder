import db from 'dbconnect';
import mongoose from "mongoose";

const MODEL_NAME = "model1"

const schema = new Schema({
    retirementage: {
        type: Number, 
        required: true
    }
})

console.log(Schema.retirementage)

export default mongoose.model[MODEL_NAME] || mongoose.model(MODEL_NAME, schema, "model1")

