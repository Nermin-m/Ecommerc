import React from 'react';
import { Button } from "@mui/material";
import '../assets/mainImage.css';
import Video from '../images/Introducing MacBook Air 15” _ Apple.mp4';

const MainImage: React.FC = () => {
    return (
        <div className="main-container">
            <div className="text-container">
                <p>Apple MacBook Pro M3 Max</p>
                <Button color="secondary">Shop Now</Button>
            </div>
            <div className="image-container">
                <video src={Video} autoPlay loop muted />
            </div>
        </div>
    );
};

export default MainImage;
