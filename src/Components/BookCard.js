// This grabs the properties from BookList.js and prints it to the screen.

import React from 'react';

const BookCard = (props) => {
    return(
       <a href={props.infoLink} target='_blank' rel='noopener noreferrer' className="card-container">
            <img src={props.image} alt="" className="book-image"/>
            <div className="description">
                <h2 className="description-title">{props.title}</h2>
                <h3 className="description-author">Author: {props.author}</h3>
                <h3 className="description-publisher">Published By: {props.published}</h3>
            </div>
       </a>
       
    )
}

export default BookCard;