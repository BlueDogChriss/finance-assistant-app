import React, { useState, useEffect } from "react";
import "./Tips.css";


function Tips() {
    // State for storing bill total    
    const [bill, setBill] = useState("");

    // State for storing tip percentage
    const [tip, setTip] = useState("10%");

    // State for storing number of splits
    const [split, setSplit] = useState(1);

    // State for storing split total
    const [splitTotal, setSplitTotal] = useState(0);

    // Function to handle changes in the tip input
    function handleTipChange(e) {
        let value = e.target.value.replace("%", "");
        if (value.indexOf("%") === -1) {
            value = value + "%";
        }
        setTip(value);
    }

    // Function to handle changes in the
    // bill total input
    function handleBillChange(e) {
        setBill(e.target.value);
    }

    // Function to decrease the number of splits by 1
    function splitMinus() {
        setSplit((oldValue) => Math.max(oldValue - 1, 1));
    }

    // Function to increase the number of splits by 1
    function splitPlus() {
        setSplit((oldValue) => oldValue + 1);
    }

    // Function to calculate the split total 
    // based on bill, tip, and number of splits
    function calculate() {
        const percentage = 1 + parseInt(tip.replace("%", "")) / 100;
        const result = ((bill * percentage) / split).toFixed(2);
        setSplitTotal(result);
    }

    // useEffect hook to calculate the split total
    // whenever bill, tip, or split changes
    useEffect(() => {
        calculate();
    }, [bill, tip, split]);

    return (
        <div className="main">
            <div className="container">
                <div className="content">
                    {/* Bill total input */}
                    <label>Bill total</label>
                    <input
                        type="text"
                        placeholder={"0.00"}
                        value={bill}
                        onChange={handleBillChange}
                    />

                    {/* Tip input */}
                    <label>Tip</label>
                    <input
                        type="text"
                        placeholder={"0.00"}
                        value={tip}
                        onChange={handleTipChange}
                    />

                    <div className="summary">

                        {/* Split section */}
                        <div className="split">
                            <label>Split</label>
                            <div className="split-control">
                                <button onClick={splitMinus}>-</button>
                                <span>{split}</span>
                                <button onClick={splitPlus}>+</button>
                            </div>
                        </div>

                        {/* Result section */}
                        <div className="result">
                            <label>Split total</label>
                            <span>{splitTotal}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tips;