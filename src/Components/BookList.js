// This sets property to the value of selected material from google books api.

import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
    return(
       <div className="List">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                                key={i}
                                image={book.volumeInfo.imageLinks.thumbnail} 
                                infoLink={book.volumeInfo.infoLink}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                published={book.volumeInfo.publisher}
                            />
                })
            }
       </div>
    )
}

export default BookList;