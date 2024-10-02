import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {NestedModalProps} from '../types/types.tsx'
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const movingDivStyle = {
    width: '430px',
    height: '648px',
     border:"1px solid #e3dfe5",
    borderRadius: '15px',
    padding: '10px',
    animation: 'moveLeft 15s ease-in infinite',
    backgroundColor:'#f6f6f6 '
};


export default function NestedModal({ img1, img2, title }: NestedModalProps) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={movingDivStyle}>
            <Button onClick={handleOpen}>
                <img src={img1} alt="Thumbnail" style={{ width: '430px', height: '640px', objectFit: 'inherit',paddingBottom:"20px" }} />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontSize:'20px',marginBottom:'10px',fontWeight:'bold'}}>
                        {title}
                    </Typography>
                    <Typography style={{fontFamily:'revert'}}>Clear and Detailed: Focus on features, benefits, and specifications. Use bullet points for clarity. Make sure to include size, color options, materials, and any special offers or discounts.</Typography>
                    <img src={img2} alt={title} style={{ width: '100%', marginTop: '20px' }} />
                    <Button onClick={handleClose} style={{ marginTop: '20px' }}>Close</Button>
                </Box>
            </Modal>
        </div>
    );
}

const styles = `
@keyframes moveLeft {
  0% {
    transform: translateX(0); 
  }
  100% {
    transform: translateX(-1700px);
  }
}
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);
