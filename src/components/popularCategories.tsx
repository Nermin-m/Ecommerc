
import { Stack, Box, Typography } from "@mui/material";
import { categoryData } from "../data/footer.tsx";

const PopularCategories = () => {
    return (
        <>
        <div style={{ display: "flex",width:'100%', flexDirection: "column" ,alignItems: "center",margin:"100px 100px"}}>
            <Typography variant="h6" component="div" sx={{marginBottom:'30px',fontSize:'25px'}}>Popular Search</Typography>
            <Stack direction="row" spacing={2} flexWrap='wrap' rowGap={2} sx={{width:'70%'}}>
                {categoryData.map((item, index) => (
                    <Box key={index} sx={{ padding: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
                        {item.title}
                    </Box>
                ))}
            </Stack>
        </div>
        </>
    );
};

export default PopularCategories ;
