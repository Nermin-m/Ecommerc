
import footerData from '../data/footer.tsx';
import { Stack, Paper } from '@mui/material';
import { Footertype } from "../types/types";
import Box from '@mui/material/Box';
const FooterLayout = () => {
    return (
        <div>
            <Box component="section" sx={{ p: 2, width:'100%',height:'auto',margin:'40px 100px',fontFamily:'cursive' }}>
                <p style={{fontSize:'30px',textAlign:'center',marginBottom:'40px'}}>We built our business on customer service</p>
            <Stack direction="row" spacing={2} sx={{
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
                {footerData.map((item: Footertype, index: number) => (
                    <Paper
                        key={index}
                        sx={{ width: '400px', height: 'auto', padding: 2, textAlign: 'center',
                            '&:hover': {
                                backgroundColor: '#f5f7fa',
                            },
                    }}
                        elevation={3}
                    >
                        <p style={{marginBottom:'20px'}}>{item.title}</p>
                        <p style={{marginBottom:'20px'}}>{item.description}</p>
                        <img src={item.src} alt={item.title} style={{ maxWidth: '100%', maxHeight: '80px' }} />
                    </Paper>
                ))}
            </Stack>
            </Box>
        </div>
    );
};

export default FooterLayout;
