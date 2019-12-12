import React, { Component } from 'react'
import Book from './Book'
import stubApi from './StubAPI'
import * as api from './api'



class BookList extends Component{
    constructor(props){
        super(props);
        this.state= {
            books:[]
        }
    }

    
    componentDidMount(){
        api.getAll().then(resp => {
            console.log(resp)
            this.setState({
                books:resp
            });
        }
        )
    }

    render(){
        var bookList=this.state.books.map(book => <Book key={book.id} book={book}/>)
        if(this.state.books.length === 0) { 
            return (
                <div>
                    
                </div>
            )
        }else{
            return(
            <div>
                    {
                        bookList
                    }
            </div>
            )
        }
    }

    


    // var bookList=stubApi.books.map(book => <Book key={book.id} book={book}/>)
    // return (
    //     <div>
    //         {
    //             bookList
    //         }
    //     </div>
    // )
}

export default BookList


