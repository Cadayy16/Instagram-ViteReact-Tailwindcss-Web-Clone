import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import { logout } from '../firebase'

function Header() {
    return (
        <header className='bg-white border-b border-gray-300'>
            <div className='flex items-center justify-between h-[60px] container mx-auto'>
                <Link to="/">
                    <img className='h-[36px]' src="../src/images/instagram-login.png"></img>
                </Link>

                <Search />

                <nav>
                    <button onClick={logout}>Çıkış Yap</button>
                </nav>
            </div>
        </header>
    )
}

export default Header