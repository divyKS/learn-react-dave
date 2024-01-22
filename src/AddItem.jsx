import React from 'react'
import { useRef } from 'react'

function AddItem({ newItem, setNewItem, handleSubmit }){
  const inputRef = useRef();
  return (
    // it is still an html form so it refreshes on submit, but will not change the default behaviour here
    // just writing handleSubmit also implicitly means calling it with (e)
    <form className='addForm' onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="addItem">New Item &nbsp;</label> 
        {/* removing label by sending it the very left by making its position absolute */}
        <input 
            autoFocus
            ref={inputRef}
            id='addItem'
            placeholder='Apples, Bananas...'
            type="text" 
            required
            // TODO: why is this new value as newItem needed? what is linking to one source of truth? what is a controlled input?
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
        />
        &nbsp;
        <button
            type='submit'
            aria-label='Add Item'
            onClick={()=>inputRef.current.focus()}
        >
            Add
        </button>
    </form>
  )
}

export default AddItem