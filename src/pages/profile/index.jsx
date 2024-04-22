import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, NavLink, Outlet } from 'react-router-dom'
import { getUserInfo } from '../../firebase'
import { setUser } from '../../store/auth'

import Header from './components/header'
import classNames from 'classnames'
import ProfileNoutFound from './nout-found'

function ProfileLayout() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const { username } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getUserInfo(username)
            .then(user => {
                setUser(user)
            })
            .catch(err => {
                setUser(false)
            })
    }, [])

    if (user == false) {
        return (
            <ProfileNoutFound />
        )
    }

    if (user == null) {
        return (
            <div className='text-center mt-12'>
                <span className='text-[20px]'>
                    Yükleniyor...
                </span>
            </div>
        )
    }

    return user && (
        <div>
            <Header user={user} />
            <nav className='border-t flex justify-center items-center gap-x-16'>
                <NavLink to={`/${username}`} end={true} className={({ isActive }) => classNames({
                    "text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
                    "text-[#8e8e8e] border-transparent": !isActive,
                    "text-black border-black": isActive

                })}>
                    <svg className='w-[12px] h-[12px]' aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                    GÖNDERİLER
                </NavLink>
                <NavLink to={`/${username}/tagged`} end={true} className={({ isActive }) => classNames({
                    "text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
                    "text-[#8e8e8e] border-transparent": !isActive,
                    "text-black border-black": isActive

                })}>
                    <svg className='w-[12px] h-[12px]' aria-label="" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12"><title></title><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
                    ETİKETLENENLER
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default ProfileLayout