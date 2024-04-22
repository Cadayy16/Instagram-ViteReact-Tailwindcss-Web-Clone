import React from 'react'
import { Link } from 'react-router-dom'

function ProfileNoutFound() {
    return (
        <div className='flex flex-col items-center justify-center pt-10'>
            <h6 className='font-semibold text-xl mb-8 text-[32px]'>Üzgünüz, bu sayfaya ulaşılamıyor.</h6>
            <p>Tıkladığın bağlantı bozuk olabilir veya sayfa kaldırılmış olabilir. <Link className='text-[#385898]' to='/'>Instagram'a geri dön.</Link></p>
        </div>
    )
}

export default ProfileNoutFound