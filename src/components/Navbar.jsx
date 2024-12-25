import { ConnectWallet } from "@nfid/identitykit/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import setting from "../asset/icon.png";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("/");

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className="px-4 py-4 flex w-full justify-between h-20">
            {/* Navigation Links */}
            <div className="hidden md:flex w-3/5 justify-between items-center text-[15px] font-bold">
                <Link
                    to="/"
                    onClick={() => handleLinkClick("/")}
                    className={`px-5 py-3 rounded-[7px] ${
                        activeLink === "/" ? "bg-[#1d3d9c] text-white" : "hover:bg-[#1d3d9c]"
                    }`}
                >
                    DEPOSIT
                </Link>
                <Link
                    to="/borrow"
                    onClick={() => handleLinkClick("/borrow")}
                    className={`px-5 py-3 rounded-[7px] ${
                        activeLink === "/borrow" ? "bg-[#1d3d9c] text-white" : "hover:bg-[#1d3d9c]"
                    }`}
                >
                    BORROW
                </Link>
                <Link
                    to="/provide"
                    onClick={() => handleLinkClick("/provide")}
                    className={`px-5 py-3 rounded-[7px] ${
                        activeLink === "/provide" ? "bg-[#1d3d9c] text-white" : "hover:bg-[#1d3d9c]"
                    }`}
                >
                    PROVIDE
                </Link>
                <Link
                    to="/stats"
                    onClick={() => handleLinkClick("/stats")}
                    className={`px-5 py-3 rounded-[7px] ${
                        activeLink === "/stats" ? "bg-[#1d3d9c] text-white" : "hover:bg-[#1d3d9c]"
                    }`}
                >
                    STATS
                </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-between w-1/5">
                <div className="px-2 py-2 hover:bg-[#1d3d9c] rounded-[7px]">
                    <img src={setting} className="w-7 h-7" alt="Settings" />
                </div>
                <ConnectWallet />
            </div>
        </div>
    );
};

export default Navbar;
