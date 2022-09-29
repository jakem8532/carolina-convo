import React from 'react';




const SearchBar = () => {
    
    
    
    
    return ( 
        <div>
            <div className="">
                Carolina-Convo
            </div>
            
            <form onSubmit={handleFormSubmit}>
                <input
                className="form-input"
                placeholder="Search Conversations"
                name="search"
                type="search"
                id="search"
                value={forState.search}
                onChange={handlechange}
                />
                <button>Search</button>
            </form>
        </div>

    )
}

export default SearchBar;