import { useState } from "react";
import SingleStatCard from "../components/SingleStateCard";
import ToggleButton from "../components/ToggleButton";
import CollateralInput from "../components/CollateralInput";
import CollateralOption from "../components/CollateralOption";
import SwapButton from "../components/SwapButton";

const Deposit = () => {
    const [selectedCollateral, setSelectedCollateral] = useState("ICP");
    const [amount, setAmount] = useState(0);

    const handleDeposit = () => {
        alert("Deposit button clicked!");
    };

    return (
        <>
            <ToggleButton />
            <div className="flex justify-between">
                <SingleStatCard title="Total Value Locked" value="$2.5M" />
                <SingleStatCard title="Total Borrowed" value="$1.625M" />
                <SingleStatCard title="Total Value Locked" value="8.2%" />
            </div>
            <CollateralInput selectedCollateral={selectedCollateral} amount={amount} onAmountChange={setAmount} title="Deposit Collateral" />
            <div className="flex justify-between">
                <CollateralOption
                    name="ICP"
                    value="$12.50"
                    max="85%"
                    isSelected={selectedCollateral === "ICP"}
                    onSelect={() => {
                        setSelectedCollateral("ICP");
                        setAmount(0); // Reset amount when collateral is changed
                    }}
                />
                <CollateralOption
                    name="ckBTC"
                    value="$52,000"
                    max="85%"
                    isSelected={selectedCollateral === "ckBTC"}
                    onSelect={() => {
                        setSelectedCollateral("ckBTC");
                        setAmount(0); // Reset amount when collateral is changed
                    }}
                />
                <CollateralOption
                    name="CHAT"
                    value="$0.85"
                    max="85%"
                    isSelected={selectedCollateral === "CHAT"}
                    onSelect={() => {
                        setSelectedCollateral("CHAT");
                        setAmount(0); // Reset amount when collateral is changed
                    }}
                />
            </div>
            <SwapButton label="Deposit Collateral" onClick={handleDeposit} />
        </>
    );
};

export default Deposit;
