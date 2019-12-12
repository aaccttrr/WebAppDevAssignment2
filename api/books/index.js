import express from 'express'
import Book from './bookModel'
import asyncHandler from 'express-async-handler'

const router = express.Router();

//Get all books
router.get('/',async(req,res)=>{
    try{
        const books = await Book.find();
        res.status(200).json(books);
    }catch(error){
        handleError(res, error.message);
    }
});

//Create a book
router.post('/',asyncHandler(async (req,res)=>{
    const book = await Book.create(req.body);
    res.status(201).json(book);
}));

//Update a book
router.put('/:id',asyncHandler(async(req,res)=>{
    if(req.body._id) delete req.body._id;
    const book = await Book.update({
        _id:req.params.id,
    },req.body,{
        upsert:false,
    });
    if(!book) return res.sendStatus(404);
    return res.json(200,book);
}));

//Delete a book
router.delete('/:id',asyncHandler(async(req,res)=>{
    const book = await Book.findById(req.params.id);
    if(!book) return res.send(404);
    await book.remove();
    return res.status(204).send(book);
}));

//Handles general errors
function handleError(res,err){
    return res.send(500,err);
};

export default router;