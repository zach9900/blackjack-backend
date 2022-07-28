import * as mongoose from "mongoose";

export const CardSchema = new mongoose.Schema({
    suit: String,
    number: Number,
    imgPath: String,
});