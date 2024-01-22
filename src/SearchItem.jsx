import React from 'react'

function SearchItem({search, setSearch}){
  return (
    <>
        {/*again on submit to prevent the page from reloading when the */}
        <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="search">Search</label>
          <input 
            id="search"
            type="text"
            role="searchBox" 
            placeholder='Search Items'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </form>
    </>
  )
}

export default SearchItem