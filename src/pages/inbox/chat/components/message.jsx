import classNames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Message({ message }) {

    const user = useSelector(state => state.auth.user)

    return (
        <div className={classNames({
            "flex gap-x-2 max-w-[50%]": true,
            "self-end": user.uid == message.from.id
        })}>
            {user.uid !== message.from.id && (
                <img className='h-6 w-6 rounded-full self-end' src={message.from.avatar}></img>
            )}
            <p className={classNames({
                "min-h-[44px] inline-flex items-center text-sm px-4 py-2 rounded-3xl": true,
                "border-gray-200": user.uid !== message.from.id,
                "bg-[#efefef]": user.uid

            })}>
                {message.message}
            </p>
        </div>
    )
}
