import { useEffect, useState } from "react";
import axios from "axios";

export const useAPI = () => {
    const [rates, setRates] = useState();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://api.excharngerate.host/latest?base=PLN");
                setRates(response.data);
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, [])

    return rates;
};