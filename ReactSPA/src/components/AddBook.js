import React, { Component } from 'react'
import BookList from './BookList'
import * as api from './api'
import App from '../App'

class AddBook extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             pages:'',
             genre:'',
             popularity:0
             
        }
    }

    handleTitleChange=(event)=>{
        this.setState({
            title: event.target.value
        })
    }

    handlePagesChange=(event)=>{
        this.setState({
            pages: event.target.value
        })
    }

    handleGenreChange=(event)=>{
        this.setState({
            genre: event.target.value
        })
    }

    handlePopularityChange=(event)=>{
        this.setState({
            popularity: event.target.value
        })
    }

    createBook=(event)=>{
        event.preventDefault();
        const book = {
            title:this.state.title,
            pages:this.state.pages,
            genre:this.state.genre,
            popularity:this.state.popularity,
        }

        api.addBookApi(book);
        console.log(book)
    }

    render() {
        return (
            <div class="container">
                <div class="card col-sm aquamarine">
                    <form onSubmit={this.createBook}>
                        <h2>Add a book</h2>
                        <label class="m-1">Title:  </label>
                        <input
                        type="text"
                        placeholder="e.g Dracula"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        />

                        <label class="m-1">Pages:  </label>
                        <input
                        type="number"
                        placeholder="e.g 100"
                        min="0"
                        value={this.state.pages}
                        onChange={this.handlePagesChange}
                        />

                        <label class="m-1">Genre:  </label>
                        <input
                        type="text"
                        placeholder="e.g Horror"
                        value={this.state.genre}
                        onChange={this.handleGenreChange}
                        />

                        <button type="submit" class="ml-3">Add Book</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddBook
