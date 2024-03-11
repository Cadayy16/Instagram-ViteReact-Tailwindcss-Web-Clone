import React from 'react'
import SVG from "react-inlinesvg"
function Search() {
    return (
        <label className='w-[268px] relative group'>
            <span className='group-focus-within:hidden absolute top-0 left-0 h-9 w-9 flex items-center justify-center text-[#8e8e8e]'>
                <svg aria-label="Ara" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Ara</title><path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
            </span>
            <input type='text' placeholder='Ara' className='h-9 pl-9 focus:pl-3 w-full rounded bg-[#efefef] outline-none' />
        </label>
    )
}

export default Search