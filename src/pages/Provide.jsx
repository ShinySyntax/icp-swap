import { useState } from "react";
import SingleStatCard from "../components/SingleStateCard";
import ToggleButton from "../components/ToggleButton";

const Provide = () => {
    const [amount, setAmount] = useState("");

    const handleProvideLiquidity = () => {
        alert(`Providing liquidity: ${amount}`);
    };

    return (
        <div className="md:h-screen h-auto">
            <ToggleButton />
            <div className="flex justify-between">
                <SingleStatCard title="Total Value Locked" value="$2.5M" />
                <SingleStatCard title="Total Borrowed" value="$1.625M" />
                <SingleStatCard title="Total Value Locked" value="8.2%" />
            </div>
            <div className="bg-blue-900 p-6 rounded-xl shadow-md w-full mt-5">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-white text-lg font-semibold">Provide Liquidity (ckUSDC)</h2>
                    <span className="text-blue-300 text-sm">Pool Utilization: 65%</span>
                </div>

                {/* Current APY and Position */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-blue-800 p-4 rounded-xl">
                        <span className="block text-blue-300 text-sm">Current APY</span>
                        <span className="block text-white text-xl font-bold">8.2%</span>
                    </div>
                    <div className="bg-blue-800 p-4 rounded-xl">
                        <span className="block text-blue-300 text-sm">Your Position</span>
                        <span className="block text-white text-xl font-bold">$0.00</span>
                    </div>
                </div>

                {/* Input Field */}
                <div className="mb-8">
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount to provide"
                        className="w-full bg-blue-800 text-white text-lg p-3 rounded-xl outline-none placeholder-blue-500"
                    />
                </div>

                {/* Button */}
                <button
                    onClick={handleProvideLiquidity}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-300 text-white text-lg font-medium py-3 rounded-md hover:opacity-90 transition"
                >
                    Provide Liquidity
                </button>
            </div>
        </div>
    );
};

export default Provide;
