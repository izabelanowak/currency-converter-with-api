import { useEffect, useState } from "react";
import axios from "axios";

export const useAPI = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
        date: null,
        rates: null,
    });

    const getRatesData = () => {
        (async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                setRatesData({
                    status: "success",
                    date: response.data.date,
                    rates: response.data.rates
                });
            }
            catch (error) {
                setRatesData({
                    status: "error"
                });
            }
        })();
    };

    useEffect(() => {
        setTimeout(getRatesData, 1_000);
    }, [])

    return ratesData;
};