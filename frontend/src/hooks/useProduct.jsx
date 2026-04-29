import {useEffect, useState} from "react";

export default function useProduct(productId) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ignore = false;

        async function fetchProduct() {
            setLoading(true);

            try {
                const response = await fetch(`/webshop/api/artikelen/artikel/${productId}`);
                if (response.ok) {
                    const data = await response.json();

                    if (!ignore) {
                        setProduct(data);
                    }
                }
            } finally {
                if (!ignore) setLoading(false);
            }
        }

        fetchProduct();

        return () => ignore = true;
    }, [productId]);

    return {
        product,
        loading
    };
}