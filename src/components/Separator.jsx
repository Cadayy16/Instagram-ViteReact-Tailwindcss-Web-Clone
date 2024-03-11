import React from 'react'

function Separator({ label = "YA DA" }) {
    return (
        <div className="flex items-center my-3 mb-3.5">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="px-4 text-[13px] text-gray-500 font-semibold">{label}</span>
            <div className="h-px bg-gray-300 flex-1"></div>
        </div>
    )
}

export default Separator