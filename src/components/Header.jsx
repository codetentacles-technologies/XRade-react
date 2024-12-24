import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-header mx-auto'>
            <header className="flex items-center justify-between py-4 mx-auto max-w-full sm:max-w-[540px] md:max-w-[680px] lg:max-w-[900px] xl:max-w-[1200px]">
               <Link to="/"> <img src="/images/Xtrade-logo.webp" alt="" className='w-[54px]' /></Link>
                <nav className="nav hidden md:flex">
                    <ul className="flex space-x-8">
                        <li><Link to="/Dashboard" className="no-underline">Dashboard</Link></li>
                    </ul>
                </nav>
                <button className="bg-blue text-white text-lg font-bold py-3 px-8 rounded-full flex items-center gap-2 hover:bg-bluegradient"> <img src="/images/connect-wallet-img.webp" alt="wallet" className='w-[18px] h-[18px]' />Connect Wallet</button>
            </header>
        </div>
    )
}

export default Header