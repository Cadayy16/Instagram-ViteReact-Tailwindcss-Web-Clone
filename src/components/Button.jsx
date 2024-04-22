import React from 'react'

function Button({ type = "button", children, ...props }) {
    return (
        <button
            type={type}
            {...props}
            className="h-[30px] px-4 mt-1 w-full flex items-center justify-center gap-x-2.5 text-sm bg-brand font-medium text-white rounded disabled:opacity-50">
            {children}
        </button>
    )
}

export default Button