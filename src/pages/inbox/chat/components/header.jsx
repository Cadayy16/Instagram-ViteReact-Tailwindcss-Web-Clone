import React from 'react'

export default function header({ user }) {
    return (
        <header className='h-[60px] border-b border-gray-300'>
            <div className='flex items-center justify-between px-6 py-2'>
                <button className='flex items-center gap-x-4'>
                    <img src={user.avatar} className='w-10 h-10 rounded-full'></img>
                    <h6 className='text-base font-semibold'>{user.name}</h6>
                </button>
                <button>
                    <svg aria-label="Konuşma Bilgileri" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Konuşma Bilgileri</title><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
                </button>
            </div>
        </header>
    )
}
