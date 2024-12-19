import React from 'react'

const Header = () => {
    return (
        <div className='bg-header mx-auto'>
            <header className="flex items-center justify-between p-4 mx-auto max-w-full sm:max-w-[540px] md:max-w-[680px] lg:max-w-[900px] xl:max-w-[1200px]">
                <img src="/images/XRade-logo.webp" alt="" className='w-[54px]' />
                {/* <nav className="nav">
                    <ul className="flex space-x-8">
                        <li><a className="text-primary" href="#">Home</a></li>
                        <li><a className="text-primary" href="#">Menu1</a></li>
                        <li><a className="text-primary" href="#">Menu2</a></li>
                        <li><a className="text-primary" href="#">Menu3</a></li>
                        <li><a className="text-primary" href="#">Menu4</a></li>
                    </ul>
                </nav> */}
                <button className="bg-blue text-white text-lg font-bold py-3 px-8 rounded-full flex items-center gap-2 hover:bg-bluegradient"> <img src="/images/connect-wallet-img.webp" alt="wallet" className='w-[18px] h-[18px]' />Connect Wallet</button>
            </header>
        </div>
    )
}

export default Header