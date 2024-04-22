import React from 'react'

function ProfilePosts() {
    return (
        <div className='flex justify-center flex-col items-center mt-[60px]'>
            <div className='w-[62px] h-[62px] border-2 rounded-full mb-8 border-black flex items-center justify-center'>
                <img className='w-[24px] h-[24px]' src='../src/images/posts-camera.png'></img>
            </div>
            <h6 className='text-[28px] font-semibold'>Henüz Hiç Gönderi Yok</h6>
        </div>
    )
}

export default ProfilePosts