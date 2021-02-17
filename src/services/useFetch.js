import { useEffect, useState } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function initData() {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const json = await response.json();
                    setData(json);
                    console.log("all ok")
                }
                else {
                    throw response;
                }
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        initData();
    }, [url]);

    return { data, error, loading };
}