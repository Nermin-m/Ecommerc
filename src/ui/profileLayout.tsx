import ProfileVideo from '../images/Abstract Colorful Sphere 4k 60FPS Motion Background Loop Relaxing Ball Balloon Floating In The Air.mp4';
import {Outlet} from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const ProfileLayout = () => {
    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <video
                src={ProfileVideo}
                autoPlay
                loop
                muted
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    pointerEvents: 'none'
                }}
            >
                Your browser does not support the video tag.
            </video>
            <div
                style={{
                    width: '450px',
                    minHeight: '550px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    position: 'relative',
                    zIndex: 1,
                    margin: 'auto',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    textAlign: 'center',
                    padding: '20px',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                }}>
                <p style={{fontSize:'30px',fontWeight:'bold',marginBottom:'35px',marginTop:'30px'}}>Login Form</p>
                    <Stack direction="row" spacing={2} sx={{ width: '90%',margin:'auto'}}>
                            <Button variant="contained" sx={{ flexGrow: 1,fontSize:'16px',fontFamily:"sans-serif",
                                    padding:"10px",marginBottom:'10px' }} href="/">
                                    Login
                            </Button>
                            <Button sx={{ flexGrow: 1,fontSize:'16px',fontFamily:"sans-serif",
                                    padding:"10px",marginBottom:'20px',background:'none',border:'1px solid white'  }} href="profile/signup">
                                    Sign Up
                            </Button>
                    </Stack>
            <Outlet/>
            </div>
        </div>
    );
};
export default ProfileLayout;