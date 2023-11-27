import { useEffect, useState } from "react";

const useProperty = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/properties')
            .then(res => res.json())
            .then(data => {
                setProperties(data);
                setLoading(false);
            })
    }, [])
    return [properties, loading];
}

export default useProperty;