import React from 'react'
import { useSelector } from 'react-redux'
import ChatList from './chatlist'

function Sidebar() {

    const user = useSelector(state => state.auth.user)

    return (
        <aside className='w-[349px] flex-shrink-0 border-r border-gray-300'>
            <header className='h-[60px] border-b border-gray-300 flex items-center justify-between px-5'>
                <div className='flex items-center gap-x-2 mx-auto font-semibold text-base'>
                    <button>
                        {user.username}
                    </button>
                    <svg aria-label="Aşağı Ok Simgesi" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title>Aşağı Ok Simgesi</title><path d="M12 17.502a1 1 0 0 1-.707-.293l-9-9.004a1 1 0 0 1 1.414-1.414L12 15.087l8.293-8.296a1 1 0 0 1 1.414 1.414l-9 9.004a1 1 0 0 1-.707.293Z"></path></svg>
                </div>
                <svg aria-label="Yeni Mesaj" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Yeni Mesaj</title><path d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg>
            </header>
            <ChatList />

        </aside>
    )
}

export default Sidebar