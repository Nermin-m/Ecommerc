import React from 'react';
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { blogData } from '../data/footer';
import { BlogTs } from "../types/types";
import { useInView } from 'react-intersection-observer';
import '../assets/mainImage.css';

const Blogs: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1, //
    });

    return (
        <div className='blogCss'>
            <Typography variant="h4" component="h1" gutterBottom style={{ marginBottom: '20px', textAlign: 'center' }}>
                Our Blogs
            </Typography>
            <Stack direction='row' spacing={3} justifyContent="center" flexWrap="wrap" rowGap={5}>
                {blogData.map((item: BlogTs, index: number) => (
                    <Box
                        key={index}
                        ref={ref}
                        className={`boxAnimation ${inView ? 'boxVisible' : ''}`}
                        sx={{
                            flexGrow: 1,
                            maxWidth: '340px',
                            minWidth: '200px',
                            padding: '10px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            backgroundColor: '#fff',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Typography variant="h6" component="h2" style={{ marginBottom: '15px', fontSize: '15px', fontFamily: 'revert' }}>
                            {item.title}
                        </Typography>
                        <img
                            src={item.img}
                            alt={item.title}
                            style={{ backgroundSize: 'contain', height: '250px', borderRadius: '16px' }}
                        />
                    </Box>
                ))}
            </Stack>
        </div>
    );
};

export default Blogs;
