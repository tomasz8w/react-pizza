import { useEffect, useState } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function initData() {
            try {
                const response = await fetch("data.json");
                if (response.ok) {
                    const json = await response.json();
                    setData(json);
                    console.log("all ok")
                }
                else {
                    throw response;
                }
            } catch (e) {
                console.log('error loading data')
            }
        }
        initData();
    }, [url]);

    return { data };
}