import React, { useState, useCallback } from 'react';
import { Button, Stack } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { categoryData } from '../data/footer';
import { Footertype } from '../types/types';
import Query from "../reactQuery/query.tsx";

const CategoryFilter: React.FC = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // State for selected category

    const handleClickCategory = useCallback((path: string) => {
        setSelectedCategory(path); // Set the selected category
        navigate(`/product${path}`); // Navigate to the category page
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

            {/* Pass selectedCategory to the Query component */}
            <Query category={selectedCategory} />

            <Outlet />
        </div>
    );
};

export default CategoryFilter;
