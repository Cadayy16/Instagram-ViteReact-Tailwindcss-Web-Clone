import { useField } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

export default function Input({ label, type = 'text', ...props }) {

    const [field, meta, helpers] = useField(props)
    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)

    useEffect(() => {
        if (show) {
            setType('text')
        }
        else if (type === 'password') {
            setType('password')
        }
    }, [show])

    return (
        <label className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-500">
            <input type={inputType} className={classNames({
                "px-2 w-full h-[38px] bg-transparent outline-none text-xs": true,
                "valid:pt-[10px]": field.value,
            })} {...field} {...props}></input>
            <small className={classNames({
                "absolute left-[9px] text-gray-500 pointer-events-none cursor-text -translate-y-1/2 transition-all": true,
                "text-xs top-1/2": !field.value,
                "text-[10px] top-2.5": field.value
            })}>{label}</small>
            {type === 'password' && field.value && (
                <div onClick={() => setShow(show => !show)} className='h-full cursor-pointer select-none flex items-center text-sm font-semibold pr-2'>
                    {show ? 'Gizle' : 'Göster'}
                </div>
            )}
        </label>
    )
}
