import { ConnectWallet } from "@nfid/identitykit/react"
import { Link } from "react-router-dom";
import setting from "../asset/icon.png"

const Navbar = () => {
    return (
        <div className="px-4 py-4 flex w-full justify-between h-20">
            <div className="hidden md:flex w-3/5 justify-between items-center text-[15px] font-bold">
                <Link to="/" className="px-5 py-3 hover:bg-[#1d3d9c] hover:px-5 hover:py-3 hover:rounded-[7px]">DEPOSIT</Link>
                <Link to="/borrow" className="px-5 py-3 hover:bg-[#1d3d9c] hover:px-5 hover:py-3 hover:rounded-[7px]">BORROW</Link>
                <Link to="/provide" className="px-5 py-3 hover:bg-[#1d3d9c] hover:px-5 hover:py-3 hover:rounded-[7px]">PROVIDE</Link>
                <Link to="/stats" className="px-5 py-3 hover:bg-[#1d3d9c] hover:px-5 hover:py-3 hover:rounded-[7px]">STATS</Link>
            </div>
            <div className="flex items-center justify-between w-1/5">
                <div className="px-2 py-2 hover:bg-[#1d3d9c] hover:px-2 hover:py-2 hover:rounded-[7px]">
                    <img src={setting} className="w-7 h-7" alt="" />
                </div>
                <ConnectWallet />
            </div>
        </div>
    );
};

export default Navbar;
