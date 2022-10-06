import React, { useState } from 'react';




const SearchBar = () => {
    const [formState, setFormState] = useState({ search: '' })

    const handleFormSubmit = async (event) => {

    }

    const handleChange = event => {

    }
    
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
                onChange={handleChange}
                />
                <button className="" type="submit">Search</button>
            </form>
        </div>

    )
}

export default SearchBar;