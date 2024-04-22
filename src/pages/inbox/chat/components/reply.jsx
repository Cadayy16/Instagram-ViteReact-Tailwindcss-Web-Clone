import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default function Reply({ setMessages }) {

    const [message, setMessage] = useState('');

    const sendMessage = e => {
        e.preventDefault()
        setMessages(messages => [
            ...messages,
            {
                from: {
                    id: 'z63r1vxwAHdacWrt2d9cwY0J8l22',
                    name: "Hacı",
                    username: 'Hacı',
                    avatar: 'https://scontent.cdninstagram.com/v/t51.2885-19/354427060_1036873421014041_6232270556976591781_n.jpg?stp=dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=2Jciot8r9g4Ab6RAo12&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfCn9gUgtwHeexHsZU_bLxCNksyUCWcDQZckgQ563ho-2g&oe=6624CEC7'
                },
                message
            },
        ])
        setMessage('')
    }

    return (
        <footer className='min-h-[84px] max-h-[148px] flex items-center justify-center px-6'>
            <form onSubmit={sendMessage} className='min-h-[44px] max-h-[108px] border rounded-full flex items-center w-full pl-[11px] pr-[8px]'>
                <button type='button' className='w-[40px] h-[42px] flex items-center justify-center'>
                    <svg aria-label="Bir ifade simgesi seç" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Bir ifade simgesi seç</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                </button>
                <div className='py-2 flex-1'>
                    <TextareaAutosize maxRows={3} value={message} onChange={e => setMessage(e.target.value)} placeholder='Mesaj...' className='w-full h-[40px] text-sm outline-none w-full resize-none placeholder:text-gray-500 focus:placeholder:text-gray-300' />
                </div>
                {!message && (
                    <>
                        <button type='button' className='w-[40px] h-[42px] flex items-center justify-center'>
                            <svg aria-label="Fotoğraf veya Video Ekle" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Fotoğraf veya Video Ekle</title><path d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z" fill-rule="evenodd"></path><path d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path><path d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                        </button>
                        <button type='button' className='w-[40px] h-[42px] flex items-center justify-center'>
                            <svg aria-label="Beğen" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Beğen</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                        </button>
                    </>
                )}
                {message && <button type='submit' className='text-brand font-semibold text-sm px-3'>Gönder</button>}
            </form>
        </footer>
    );
}
