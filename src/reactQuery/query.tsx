import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateMobiles } from '../redux/Slices/productSlice';
import SimpleBackdrop from "../components/backDrop";

interface QueryProps {
    category: string | null;
}

// Fetch products based on the category
const fetchProducts = async (category: string | null) => {
    if (!category) {
        throw new Error("Kategori Yok!");
    }
    const response = await axios.get(`https://ecommerce-api3.p.rapidapi.com/${category}`, {
        headers: {
            'x-rapidapi-key': '97e035c347mshcae51214a8e4dc2p1f9891jsn3aeb8b099396',
            'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
        }
    });
    return response.data;
};

const Query: React.FC<QueryProps> = ({ category }) => {
    const dispatch = useDispatch();

    const { data, error, isLoading } = useQuery({
        queryKey: [category],
        queryFn: () => fetchProducts(category),
        enabled: !!category, // Only fetch when category is available
        staleTime: Infinity,
        cacheTime: Infinity,
    });

    useEffect(() => {
        if (data && Array.isArray(data)) {
            const productData = data.map((product: any) => ({
                Brand: product.Brand,
                Description: product.Description,
                Price: product.Price,
                Image: product.Image,
                id: product.Id,
            }));
            dispatch(updateMobiles(productData));
        }
    }, [data, dispatch]);

    if (isLoading) return <SimpleBackdrop />;
    if (error) return <div>Hata: {(error as Error).message}</div>;

    return null;
};

export default Query;
