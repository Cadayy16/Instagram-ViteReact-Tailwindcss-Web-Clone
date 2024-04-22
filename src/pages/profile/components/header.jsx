import React from 'react'
function Header({ user }) {

    return (
        <header className='flex items-center px-24 gap-x-24 py-4 pb-10'>
            <img className='w-[150px] h-[150px] rounded-full' src="../src/images/44884218_345707102882519_2446069589734326272_n.jpg"></img>
            <div>
                <div className='mb-4'>
                    <h1 className='text-[28px] font-light'>{user.username}</h1>
                </div>
                <nav className='flex gap-x-10 items-center'>
                    <div><span className='font-semibold'>{user.post.length}</span> Gönderi</div>
                    <div><span className='font-semibold'>{user.followers.length}</span> Takipçi</div>
                    <div><span className='font-semibold'>{user.following.length}</span> Takip Edilen</div>
                </nav>
            </div>
        </header>
    )
}

export default Header