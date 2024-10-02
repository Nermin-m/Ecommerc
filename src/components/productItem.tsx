import React, { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductItem: React.FC = () => {
    const navigate = useNavigate();
    const { id, item } = useParams<{ id: string, item: string }>();
    const products = useSelector((state: any) => state.product?.products?.data);

    useEffect(() => {
        console.log("URL Params:", { id, item });
        console.log("Products List:", products);
    }, [id, item, products]);

    if (!products || products.length === 0) {
        return <div>Loading...</div>;
    }

    const product_item = products.find((product: any) =>
        product.Brand.replace(/\s+/g, '-').toLowerCase() === item?.toLowerCase()
    );

    if (!product_item) {
        return (
            <div>
                <p>Ürün bulunamadı.</p>
                <button onClick={() => navigate('/product')}>Ürünlere Geri Dön</button>
            </div>
        );
    }

    return (
        <div>
            <h1>{product_item.Brand}</h1>
            <p>{product_item.Description}</p>
            <p>Fiyat: {product_item.Price}</p>
            <img src={product_item.Image} alt={product_item.Brand} />
        </div>
    );
};

export default ProductItem;
