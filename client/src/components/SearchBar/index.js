import React from 'react';
import styles from './index.css';




const SearchBar = () => {
    

    
    return ( 
        <div>
            <div className="icon-text">
                Carolina-Convo
                <form onSubmit={handleFormSubmit} className="tags.is-right">
                    <input
                    className="textarea"
                    placeholder="Search Conversations"
                    name="search"
                    type="search"
                    id="search"
                    value={formState.search}
                    onChange={handlechange}
                    />
                    <button className="button-is-right button-is-rounded" type="submit">Search</button>
                </form>
            </div>
        </div>

    )
}

export default SearchBar;