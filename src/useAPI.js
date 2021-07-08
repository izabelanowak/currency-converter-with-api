import { useEffect, useState } from "react";
import axios from "axios";

export const useAPI = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
        date: null,
        rates: null,
    });

    const APIurl = "https://api.exchangerate.host/latest?base=PLN";

    const getRatesData = async (APIurl) => {
        try {
            const response = await axios.get(APIurl);

            if (APIurl !== "https://api.exchangerate.host/latest?base=PLN") {
                throw new Error();
            }

            setRatesData({
                status: response.data.rates ? "success" : "error",
                date: response.data.date,
                rates: response.data.rates
            });
        }
        catch (error) {
            setRatesData({
                status: "error"
            });
        }
    };

    useEffect(() => {
        setTimeout(() => {
            getRatesData(APIurl);
        }, 1_000);
    }, [])

    return ratesData;
};