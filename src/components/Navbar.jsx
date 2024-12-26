import { ConnectWallet } from "@nfid/identitykit/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from 'react-svg';
import setting from "../asset/icon.png";

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);
    const [activeLink, setActiveLink] = useState("/");

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className="py-4 flex w-full justify-between h-20">
            <div className="flex w-full justify-between">
                <div className='flex items-center w-[100px] md:w-3/5'>
                    <ul className='hidden md:flex w-full justify-between items-center text-[15px] font-bold'>
                        <li className=''>
                            <Link
                                to="/"
                                onClick={() => handleLinkClick("/")}
                                className={`px-5 py-3 rounded-[7px] ${activeLink === "/" ? "bg-[#1d3d9c] text-white" : "hover:bg-[#1d3d9c]"
                                    }`}>
                                DEPOSIT
                            </Link>
                        </li>
                        <li className=''>
                            <Link
                                to="/borrow"
                                onClick={() => handleLinkClick("/borrow")}
                                className={`px-5 py-3 rounded-[7px] ${activeLink === "/borrow" ? "bg-[#1d3d9c] text-white" : "hover:bg-[#1d3d9c]"
                                    }`}
                            >
                                BORROW
                            </Link>
                        </li>
                        <li className=''>
                            <Link
                                to="/provide"
                                onClick={() => handleLinkClick("/provide")}
                                className={`px-5 py-3 rounded-[7px] ${activeLink === "/provide" ? "bg-[#1d3d9c] text-white" : "hover:bg-[#1d3d9c]"
                                    }`}
                            >
                                PROVIDE
                            </Link>
                        </li>
                        <li className=''>
                            <Link
                                to="/stats"
                                onClick={() => handleLinkClick("/stats")}
                                className={`px-5 py-3 rounded-[7px] ${activeLink === "/stats" ? "bg-[#1d3d9c] text-white" : "hover:bg-[#1d3d9c]"
                                    }`}
                            >
                                STATS
                            </Link>
                        </li>
                    </ul>
                    <div className="w-[60px] h-[60px] flex flex-col justify-center items-center cursor-pointer md:hidden transition-all duration-300" onClick={() => setHamburger(prev => !prev)}>
                        <div className={`bg-black dark:bg-gray-500 w-[25px] h-[2px] transition-all duration-500 ${hamburger ? '-rotate-45 translate-y-[8px] delay-200' : 'rotate-0 translate-y-0'}`}></div>
                        <div className={`bg-black dark:bg-gray-500 h-[2px] flex justify-center items-center my-[6px] transition-all duration-300 ${hamburger ? 'w-0' : 'w-[25px] delay-300'}`}></div>
                        <div className={`bg-black dark:bg-gray-500 w-[25px] h-[2px] transition-all duration-500 ${hamburger ? 'rotate-45 -translate-y-[8px] delay-200' : 'rotate-0 translate-y-0'}`}></div>
                    </div>

                </div>
                <div className="flex items-center justify-between w-[200px] mr-6">
                    <div className="px-2 py-2 hover:bg-[#1d3d9c] rounded-[7px] ">
                        <img src={setting} className="w-7 h-7" alt="Settings" />
                    </div>
                    <ConnectWallet />
                </div>
            </div>
            <div className={`md:hidden bg-blue-900 fixed z-30 w-full flex justify-center items-center rounded-b-md bg-gray dark:bg-blue-900 shadow-[0_20px_40px_20px_rgb(0,0,0,.3)] transition-all duration-500 ${hamburger ? 'translate-y-[70px]' : '-translate-y-[300px]'}`}>
                <ul className={`w-auto h-auto py-4 px-2  my-auto mx-0 outline-4 `}>
                    <li className=''>
                        <Link
                            to="/"
                            onClick={() => handleLinkClick("/")}
                            className='rounded-md py-2 block font-medium text-white border-[1px] border-transparent hover:border-white transition-all duration-200 cursor-pointer'>
                            DEPOSIT
                        </Link>
                    </li>
                    <li className=''>
                        <Link
                            to="/borrow"
                            onClick={() => handleLinkClick("/borrow")}
                            className='rounded-md py-2 block font-medium text-white border-[1px] border-transparent hover:border-white transition-all duration-200 cursor-pointer'
                        >
                            BORROW
                        </Link>
                    </li>
                    <li className=''>
                        <Link
                            to="/provide"
                            onClick={() => handleLinkClick("/provide")}
                            className='rounded-md py-2 block font-medium text-white border-[1px] border-transparent hover:border-white transition-all duration-200 cursor-pointer'
                        >
                            PROVIDE
                        </Link>
                    </li>
                    <li className=''>
                        <Link
                            to="/stats"
                            onClick={() => handleLinkClick("/stats")}
                            className='rounded-md py-2 block font-medium text-white border-[1px] border-transparent hover:border-white transition-all duration-200 cursor-pointer'
                        >
                            STATS
                        </Link>
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default Navbar;
