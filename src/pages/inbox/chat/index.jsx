import React, { useState } from 'react'
import Header from '../../../pages/inbox/chat/components/header'
import Reply from './components/reply'
import Messages from './components/messages'

export default function Chat() {

    const user = {
        name: 'Kerim Gülyüz',
        avatar: 'https://scontent.cdninstagram.com/v/t51.2885-19/354427060_1036873421014041_6232270556976591781_n.jpg?stp=dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=inCLTj6PZUYAb5oFwWO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfDuWiyX5_vF-AaSHoosBnXkqyrULNdeezhpnHfGp5IuZQ&oe=662CB7C7'
    }

    const [messages, setMessages] = useState([
        {
            from: {
                id: 'z63r1vxwAHdacWrt2d9cwY0J8l22',
                name: "Hacı",
                username: 'Hacı',
                avatar: 'https://scontent.cdninstagram.com/v/t51.2885-19/354427060_1036873421014041_6232270556976591781_n.jpg?stp=dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=2Jciot8r9g4Ab6RAo12&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfCn9gUgtwHeexHsZU_bLxCNksyUCWcDQZckgQ563ho-2g&oe=6624CEC7'
            },
            message: 'Beykenti yedim'
        },
    ])

    return (
        <div className='flex-1'>
            <Header user={user} />
            <Messages messages={messages} />
            <Reply setMessages={setMessages} />
        </div>
    )
}
