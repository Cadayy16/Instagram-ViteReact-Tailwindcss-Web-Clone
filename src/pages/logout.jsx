import React, { useEffect } from 'react'
import { logout } from '../firebase'
function Logout() {
    useEffect(() => {
        logout()
    })

    return null
}

export default Logout