import React from 'react'
import { Outlet } from 'react-router-dom'
function AuthLayout() {
    return (
        <div className='h-full w-full flex flex-wrap overflow-auto items-center gap-x-8 justify-center'>
            <Outlet />
        </div>
    )
}

export default AuthLayout;