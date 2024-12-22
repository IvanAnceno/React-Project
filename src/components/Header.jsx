import { NavLink } from 'react-router';
import logo from '../logo2.png';
import { useEffect, useState } from 'react';

function Header () {

    return (
        <div className="flex justify-center items-center w-full relative px-[40px]">
            {/* Main navbar and logo container */}
            <div className="bg-black bg-opacity-50 backdrop-blur-5xl rounded-3xl flex justify-center items-center m-3 px-3 w-[600px] transition-all duration-500 transform slide-in-top">
                <img src={logo} className="w-[50px] h-[50px]" alt="Logo" />

                <nav className="flex justify-center items-center gap-6 text-[18px] font-bold tracking-widest text-white text-sm cursor-pointer transition-all duration-1000 px-8 text-center">
                    {/* Home */}
                    <div className="relative group">
                        <NavLink to="/" className="hover:text-[#FFF4F4]">Home</NavLink>
                        <span className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FFF4F4] transition-all duration-300 group-hover:w-full bottom-0"></span>
                    </div>

                    {/* New Release */}
                    <div className="relative group">
                        <NavLink to="/products" className="hover:text-[#FFF4F4]">Top Anime</NavLink>
                        <span className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FFF4F4] transition-all duration-300 group-hover:w-full bottom-0"></span>
                    </div>

                    {/* Movie */}
                    <div className="relative group">
                        <NavLink to="/movie" className="hover:text-[#FFF4F4]">Movie</NavLink>
                        <span className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FFF4F4] transition-all duration-300 group-hover:w-full bottom-0"></span>
                    </div>

                    {/* Series */}
                    <div className="relative group">
                        <NavLink to="/series" className="hover:text-[#FFF4F4]">Series</NavLink>
                        <span className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FFF4F4] transition-all duration-300 group-hover:w-full bottom-0"></span>
                    </div>

                    {/* Contact */}
                    <div className="relative group">
                        <NavLink to="/contact" className="hover:text-[#FFF4F4]">Contact</NavLink>
                        <span className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FFF4F4] transition-all duration-300 group-hover:w-full bottom-0"></span>
                    </div>
                </nav>
            </div>

            {/* Log In | Sign In on the right, outside the background div */}
            <button className="absolute right-[40px] text-white text-sm font-semibold flex justify-between gap-2 transition-all duration-1000 transform slide-in-right">
                <p className='hover:underline'>Log In</p>
                <p>|</p>
                <p className='hover:underline'> Sign In</p>
            </button>
        </div>
    );
}

export default Header;
