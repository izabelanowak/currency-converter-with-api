import { useState } from "react";

export const useFormResult = () => {
    const [amount, setAmount] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState("EUR");
    const [result, setResult] = useState();

    const calculateResult = (amount, rate) => {
        return amount * rate;
    };

    return {
        amount,
        setAmount,
        selectedCurrency,
        setSelectedCurrency,
        result,
        setResult,
        calculateResult
    }
};