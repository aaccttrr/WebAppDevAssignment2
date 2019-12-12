import bookData from './api/books/bookModel';
import bookModel from './api/books/bookModel';

const books = [{
    'title':'1984',
    'pages':'200',
    'genre':'Dystopian',
    'popularity':'1',
    },
    {
    'title':'Good Omens',
    'pages':'300',
    'genre':'Comedy',
    'popularity':'1',
    },
    {
    'title':'Frankenstein',
    'pages':'150',
    'genre':'Horror',
    'popularity':'1',
    },
];

export default async function loadBooks(){
    try{
        await bookModel.deleteMany();
        await bookModel.collection.insertMany(books);
        console.info(`${books.length} books were successfully stored.`);
    } catch(err){
        console.error(`failed to load book data: ${err}`);
    }
}