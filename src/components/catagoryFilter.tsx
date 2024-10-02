import React, { useState, useCallback, useEffect } from 'react';
import { Button, Stack } from '@mui/material';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { categoryData } from '../data/footer';
import { Footertype } from '../types/types';
import Query from "../reactQuery/query.tsx";

const CategoryFilter: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();  // Get the category from the URL
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Automatically set "laptops" as the default category if none is selected
    useEffect(() => {
        if (!id) {
            setSelectedCategory('laptops');
            navigate('/product/laptops');  // Navigate to the laptops category
        } else {
            setSelectedCategory(id);
        }
    }, [id, navigate]);

    const handleClickCategory = useCallback((path: string) => {
        setSelectedCategory(path);
        navigate(`/product/${path}`);
    }, [navigate]);

    return (
        <div>
            <Stack direction="column" spacing={1} sx={{ width: '10%', position: 'fixed', top: '190px', left: '20px' }}>
                {categoryData.map((item: Footertype) => (
                    <Button
                        key={item.title}
                        sx={{ padding: '10px' }}
                        variant="outlined"
                        size="small"
                        onClick={() => handleClickCategory(item.path || '')}
                    >
                        {item.title}
                    </Button>
                ))}
            </Stack>

            {/* Pass the selectedCategory to the Query component */}
            <Query category={selectedCategory} />

            <Outlet />
        </div>
    );
};

export default CategoryFilter;
