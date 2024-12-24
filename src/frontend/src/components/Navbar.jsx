import { ConnectWallet } from "@nfid/identitykit/react"
import { Link } from "react-router-dom";
import setting from "../asset/icon.png"

const Navbar = () => {
    return (
        <div className="px-4 py-4 flex w-full justify-between h-20">
            <div className="flex w-3/5 justify-between items-center text-[15px]">
                <Link to="/" className="hover:bg-[#1d3d9c] hover:p-3 hover:rounded-[7px]">DEPOSIT</Link>
                <Link to="/borrow">BORROW</Link>
                <Link to="/provide">PROVIDE</Link>
                <Link to="/stats">STATS</Link>
            </div>
            <div className="flex items-center justify-between w-1/5">
                <img src={setting} alt="" className="w-7 h-auto"/>
                <ConnectWallet />
            </div>
        </div>
    );
};

export default Navbar;
