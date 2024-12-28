import { useState } from "react";
import SingleStatCard from "../components/SingleStateCard";
import ToggleButton from "../components/ToggleButton";

const Stats = () => {
    return (
        <div className="md:h-screen h-auto">
            <ToggleButton />
            <div className="flex justify-between">
                <SingleStatCard title="Total Value Locked" value="$2.5M" />
                <SingleStatCard title="Total Borrowed" value="$1.625M" />
                <SingleStatCard title="Total Value Locked" value="8.2%" />
            </div>
            <div className="bg-blue-900 text-white p-6 rounded-xl w-full mt-5">
                <h2 className="text-lg font-bold mb-4">Collateral Assets</h2>
                <div className="space-y-4 mb-4 rounded-xl">
                        <div className="flex justify-between items-center bg-blue-800 p-4 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 bg-white rounded-full"></div>
                                <div>
                                    <h3 className="text-sm font-bold">ICP</h3>
                                    <p className="text-sm text-gray-400">$12.50</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm">TVL: $1.2M</p>
                                <p className="text-sm text-gray-400">Max LTV: 85%</p>
                            </div>
                        </div>
                </div>
                <div className="space-y-4 mb-4 rounded-xl">
                        <div className="flex justify-between items-center bg-blue-800 p-4 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 bg-white rounded-full"></div>
                                <div>
                                    <h3 className="text-sm font-bold">ckBTC</h3>
                                    <p className="text-sm text-gray-400">$52,000</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm">TVL: $850K</p>
                                <p className="text-sm text-gray-400">Max LTV: 85%</p>
                            </div>
                        </div>
                </div>
                <div className="space-y-4 rounded-xl">
                        <div className="flex justify-between items-center bg-blue-800 p-4 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <div className="w-8 h-8 bg-white rounded-full"></div>
                                <div>
                                    <h3 className="text-sm font-bold">CHAT</h3>
                                    <p className="text-sm text-gray-400">$0.85</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm">TVL: $450K</p>
                                <p className="text-sm text-gray-400">Max LTV: 85%</p>
                            </div>
                        </div>
                </div>
            </div>

        </div>
    );
};

export default Stats;
