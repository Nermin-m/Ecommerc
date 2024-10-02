import React from 'react';
import { useSelector } from "react-redux";
import { Box, Typography, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate, useParams } from "react-router-dom";

const ProductMain: React.FC = () => {
    const [value, setValue] = React.useState<number | null>(2);
    const [hover, setHover] = React.useState(-1);
    const { id, item } = useParams();
    const products = useSelector((state: any) => state.product.products?.data);
    const navigate = useNavigate();

    const handleItemClick = (product: any) => {
        const formattedBrand = product.Brand.replace(/\s+/g, '-').toLowerCase();
        navigate(`/product/${id}/${formattedBrand}`);
    };

    return (
        <div style={{ width: '83%', background: '#f2f5f3', height: 'auto', rowGap: '10px', display: 'flex', flexWrap: 'wrap', position: 'absolute', right: 30, top: 190 }}>
            {products?.map((product: any) => (
                <Box
                    key={product.Price}
                    sx={{
                        marginTop: '10px',
                        width: '270px',
                        padding: '14px',
                        margin: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        borderRadius: '8px',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        },
                        background: 'white',
                        cursor: 'pointer'
                    }}
                    onClick={() => handleItemClick(product)}
                >
                    <Typography variant="h6" component="h5" sx={{ textAlign: 'center', fontFamily: 'revert-layer' }}>
                        {product.Brand.slice(0, 33)}
                    </Typography>

                    <Box
                        component="img"
                        src={product.Image}
                        alt={product.Brand}
                        sx={{
                            width: '300px',
                            height: '190px',
                            marginTop: '10px',
                            objectFit: 'cover',
                        }}
                    />
                    <Box sx={{ width: 180, display: 'flex', alignItems: 'center' }}>
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={(value) => `${value} Star`}
                            onChange={(_event, newValue) => setValue(newValue)}
                            onChangeActive={(_event, newHover) => setHover(newHover)}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>{hover !== -1 ? hover : value}</Box>
                        )}
                    </Box>
                    <Typography variant="body1" component="p" sx={{ marginTop: '10px' }}>
                        Price: {product.Price}
                    </Typography>
                </Box>
            ))}
        </div>
    );
};

export default ProductMain;
