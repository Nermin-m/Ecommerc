// import React from 'react';
// import Box from "@mui/material/Box";
// import Product1 from '../images/product1.jpg';
// import Product2 from '../images/product2.webp';
// import Product3 from '../images/product5.webp';
// import Product4 from '../images/product3.webp';
// import Product5 from '../images/product4.webp';
// import Product6 from '../images/product6.webp';
// import Product8 from '../images/product8.webp';
// import Product9 from '../images/product9.webp';
// import Product10 from '../images/product10.webp';
// import Product7 from '../images/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large-removebg-preview.png';
//
// const FeaturesProducts = () => {
//     const products = [
//         { src: Product1, alt: "Hair Clips" },
//         { src: Product3, alt: "SmartWatch" },
//         { src: Product4, alt: "Pink Dress" },
//         { src: Product6, alt: "Jacket With Flap Pockets" },
//         { src: Product9, alt: "Blender" },
//         { src: Product5, alt: "Bag" },
//         { src: Product7, alt: "Iphone" },
//         { src: Product2, alt: "Cherry Pink Charger" },
//         { src: Product10, alt: "Lipgloss" },
//         { src: Product8, alt: "Slogan Graphic Two Tone Varsity Jacket" },
//     ];
//
//     return (
//         <div style={{ margin: "100px 100px" ,width:"100%" }}>
//             <h1 style={{ textAlign: "center", marginBottom: "40px",fontSize:'28px',fontFamily:'system-ui',
//                 fontWeight:'500',color: 'brown' }}>Featured Products</h1>
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
//                 {products.map((product, index) => (
//                     <Box
//                         key={index}
//                         sx={{
//                             width: '200px',
//                             height: '320px',
//                             textAlign: 'center',
//                             overflow: 'hidden',
//                             borderRadius: '8px',
//                             transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                             '&:hover': {
//                                 transform: 'scale(1.05)',
//                                 boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
//                             },
//                             backgroundColor: 'white',
//                             padding: '10px',
//                             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                         }}
//                     >
//                         <img
//                             src={product.src}
//                             alt={product.alt}
//                             style={{
//                                 width: '100%',
//                                 height: 'auto',
//                                 borderRadius: '8px',
//                                 transition: 'transform 0.3s ease',
//                             }}
//                         />
//                         <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '16px' }}>{product.alt}</p>
//                     </Box>
//                 ))}
//             </Box>
//         </div>
//     );
// };
//
// export default FeaturesProducts;
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';

function Cards() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const url = 'https://unofficial-shein.p.rapidapi.com/products/list?language=en&country=US&currency=USD&cat_id=1980&adp=10170797&sort=7&limit=20&page=1';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '97e035c347mshcae51214a8e4dc2p1f9891jsn3aeb8b099396',
                    'x-rapidapi-host': 'unofficial-shein.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setProducts(data.info.products || []);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Product List
            </Typography>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.goods_id} xs={12} sm={6} md={3}>
                        <Card sx={{ maxWidth: 500 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                width="200"
                                image={product.goods_img}
                                alt={product.goods_name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {product.goods_name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.cate_name}
                                </Typography>
                                <Typography variant="h6">
                                    {product.amountWithSymbol}
                                </Typography>

                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Button>View Details</Button>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={1}>
                                            {product.detail_image && product.detail_image.map((img, idx) => (
                                                <Grid item key={idx}>
                                                    <img
                                                        src={img}
                                                        alt={`Detail ${idx}`}
                                                        style={{ width: '100px', height: '100px', borderRadius: '5px' }}
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Cards;
