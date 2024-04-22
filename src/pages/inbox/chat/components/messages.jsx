import React from 'react'
import Message from './message'
import ScrollToBottom from 'react-scroll-to-bottom'

export default function Messages({ messages }) {
    return (
        <ScrollToBottom className='h-[calc(100%-144px)] px-4 overflow-auto message-box'>
            <div className='mb-auto'></div>
            {messages.map((message, key) => <Message message={message} key={key} />)}
        </ScrollToBottom>
    )
}
