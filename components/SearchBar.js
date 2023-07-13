import React from 'react'

export default function SearchBar({searchkey, searchSetKey}) {
    const theSearchBar = (event) => {
        const aSearch = event.target.value
        searchSetKey(aSearch)
    }
    return (
        <div className='searchBar'>
            <label for = "search-here"> Search Here:
            <input type="search" id='search-here' name='search' onchange={theSearchBar}/>
            <input type='checkbox'/>
            </label>
        </div>
    )
}