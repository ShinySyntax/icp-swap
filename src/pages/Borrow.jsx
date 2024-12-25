import { useState } from "react";
import SingleStatCard from "../components/SingleStateCard";
import ToggleButton from "../components/ToggleButton";
import CollateralInput from "../components/CollateralInput";
import SwapButton from "../components/SwapButton";

const Borrow = () => {
    const [selectedCollateral, setSelectedCollateral] = useState("ckUSDC");
    const [amount, setAmount] = useState(0);

    const handleDeposit = () => {
        alert("Borrow ckUSDC!");
    };

    return (
        <>
            <ToggleButton />
            <div className="flex justify-between">
                <SingleStatCard title="Total Value Locked" value="$2.5M" />
                <SingleStatCard title="Total Borrowed" value="$1.625M" />
                <SingleStatCard title="Total Value Locked" value="8.2%" />
            </div>
            <CollateralInput selectedCollateral={selectedCollateral} amount={amount} onAmountChange={setAmount} title="Borrow ckUSDC" />
            <SwapButton label="Borrow ckUSDC" onClick={handleDeposit} />
        </>
    );
};

export default Borrow;
