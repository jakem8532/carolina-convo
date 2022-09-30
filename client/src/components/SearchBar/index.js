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
                value={formState.search}
                onChange={handlechange}
                />
                <button className="" type="submit">Search</button>
            </form>
        </div>

    )
}

export default SearchBar;