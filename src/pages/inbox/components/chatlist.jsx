import classNames from 'classnames'
import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

function ChatList() {


    const { conversationId } = useParams()
    const chats = [
        {
            id: 1,
            user: {
                avatar: 'https://scontent.cdninstagram.com/v/t51.2885-19/354427060_1036873421014041_6232270556976591781_n.jpg?stp=dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=inCLTj6PZUYAb5oFwWO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfDuWiyX5_vF-AaSHoosBnXkqyrULNdeezhpnHfGp5IuZQ&oe=662CB7C7',
                name: 'Kerim Gülyüz'
            },
            lastMessage: 'Beykenti yedim'
        },
        {
            id: 3,
            user: {
                avatar: 'https://scontent.cdninstagram.com/v/t51.2885-19/269834827_595249531752378_2783000816306089023_n.jpg?stp=dst-jpg_s100x100&_nc_cat=107&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=4XPNtT_fuHAAb5YFm2v&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfAvO0pyyrTy1M-pBRkJmkxN3junERS1HuZTwGlpe5hg5g&oe=662CB031',
                name: 'Yusuf Furkan Uzun'
            },
            lastMessage: 'Nerdeeeeee'
        },
        {
            id: 4,
            user: {
                avatar: 'https://scontent.cdninstagram.com/v/t51.2885-19/338303556_733303734957481_4635433683385706643_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=Qy_QZHS5qfoAb7siV_O&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfD6AkCbPsC0Z8-E9dI4gCmvdoIExZtxBoWp8Hdd5uGtjw&oe=662C9D58',
                name: 'Metin Gül'
            },
            lastMessage: 'Valooooğğğğğ'
        },
        {
            id: 5,
            user: {
                avatar: 'https://scontent.cdninstagram.com/v/t51.2885-19/394682380_378396991178316_1365730225069457950_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=blJmwWHQKc0Ab795xBt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfBfqV7tjxe1_GTl0Z42pQv6KegoRKupgNQgGNkKgoZF8g&oe=662CB5CD',
                name: 'Muhammed Çiçekel'
            },
            lastMessage: 'Nbr moruq'
        },
    ]

    return (
        <div className='h-[calc(100%-60px)] overflow-auto py-3'>
            <header className='flex items-center justify-between px-5 mb-1'>
                <h6 className='text-base font-semibold'>Mesajlar</h6>
                <button className='text-brand text-sm font-semibold'>0 istek</button>
            </header>
            {chats.map(chat => (
                <NavLink
                    className={classNames({
                        'h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5': true,
                        'font-semibold': chat?.unread,
                        '!bg-[#efefef]': +conversationId === chat.id
                    })}
                    key={chat.id}
                    to={`/inbox/${chat.id}`}
                >
                    <img src={chat.user.avatar} className='w-14 h-14 rounded-full' alt=''></img>
                    <div>
                        <h6 className='text-sm'>{chat.user.name}</h6>
                        <p className={`text-sm ${!chat?.unread && 'text-[#8e8e8e]'}`}>
                            {chat.lastMessage}
                        </p>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}

export default ChatList