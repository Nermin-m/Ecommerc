import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { categoryData } from '../data/footer';
import  {Footertype} from '../types/types.tsx';
export default function HeaderCategory() {
    const [value, setValue] = React.useState(0);
    const tabsCount = categoryData.length;

    const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: number) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((prevValue) => (prevValue + 1) % tabsCount);
        }, 2500);

        return () => clearInterval(interval);
    }, [tabsCount]);

    return (
        <>
        <Box sx={{ maxWidth: { xs: 320, sm: 480, lg: 1300 } }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {categoryData.map((item: Footertype, index: number) => (
                    <Tab
                        key={index}
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center',marginRight:'10px' }}>
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    style={{ width: 50, height: 45, marginRight: 8 ,borderRadius:"20px"}}
                                />
                                {item.title}
                            </Box>
                        }
                    />
                ))}
            </Tabs>
        </Box>
        </>
    );
}
