// Search box 

import React from 'react';

const SearchBox = (props) => {
    return(
        <div className="search-box">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text"/>
            </form>
        </div>

        
    )
}

export default SearchBox;