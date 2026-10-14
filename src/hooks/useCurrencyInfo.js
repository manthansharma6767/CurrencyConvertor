import { useEffect, useState } from "react";

// custom hook or a function
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data[currency]);
                console.log(data);

            })
            .catch((error) => {
                console.log(error);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
