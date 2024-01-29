import React, { useEffect, useRef, useState } from 'react'

export default function Input({ label, type = 'text', ...props }) {

    const inputRef = useRef()
    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)

    useEffect(() => {
        if (show) {
            setType('text')
            inputRef.current.focus()
        }
        else if (type === 'password') {
            setType('password')
            inputRef.current.focus()
        }
    }, [show])

    return (
        <label className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-500">
            <input ref={inputRef} type={inputType} required={true} className=" px-2 w-full h-[38px] outline-none text-xs peer valid:pt-[10px]" {...props}></input>
            <small className="absolute top-1/2 left-[9px] text-xs text-gray-500 pointer-events-none cursor-text -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
            {type === 'password' && props?.value && (
                <button type='button' onClick={() => setShow(show => !show)} className='h-full flex items-center text-sm font-semibold pr-2'>
                    {show ? 'Gizle' : 'Göster'}
                </button>
            )}
        </label>
    )
}
