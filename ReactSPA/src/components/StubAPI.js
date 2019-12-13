class StubAPI{

    constructor(){
        //  this.books=[
        //     {
        //         id:1,
        //         img:"images/1984.jpg",
        //         title:'1984',
        //         pages:200,
        //         genre:'Dystopian',
        //         popularity:0
        //     },
        //     {
        //         id:2,
        //         img:"images/1984.jpg",
        //         title:'Good Omens',
        //         pages:300,
        //         genre:'Comedy',
        //         popularity:0
        //     },
        //     {
        //         id:3,
        //         img:"images/1984.jpg",
        //         title:'Frankenstein',
        //         pages:150,
        //         genre:'Horror',
        //         popularity:0
        //     }
        // ]
    }

    // addBook(id, title, pages, genre, popularity, callback) {
    //     let book = {
    //       "id": id,
    //       "title": title,
    //       "pages":pages,
    //       "genre":genre,
    //       "popularity":popularity
    //     }
    
    //     this.books.push(book);
    //     console.log(this.books)
        

    //     if (callback) callback();
    //   }

//       deleteBook(id){
//         let book = {
//             "id": id
//         }
//         this.books.pop(book)
//         console.log(this.books)
//       }
}

export default new StubAPI();