import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:String,
    pages:{
        type:Number,
        min:0
    },
    genre:String,
    popularity:{
        type:Number,
        min:0,
        max:10
    },
});

export default mongoose.model('Book',BookSchema);