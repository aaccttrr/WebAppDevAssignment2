import React from 'react'
import * as api from './api'


function Book({book}) {

    return (
        <div class = "container">
            <div class="row">
                <div class="card col-sm m-1 seafoam">
                    {/* <img class="card-img-top" src={book.img} alt="Cover" height="200" width="100"/> reason for removal: Images would not display. */}
                    <div class="card-body">
                        <h2>{book.title}</h2>
                        <h3>Number of pages: {book.pages}</h3>
                        <h3>Genre: {book.genre}</h3>
                        <h3>Popularity: {book.popularity}</h3>
                        <button class="brown" /*onClick={}*/>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book