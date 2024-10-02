import {Props} from "../types/types.tsx";
import { twMerge } from 'tailwind-merge';
import HeaderCategory from "../components/headerCateqory.tsx";
import MainImage from "../components/mainImage.tsx";
import Blogs from "../components/blogs.tsx";
import PopularCategories from "../components/popularCategories.tsx";
import FooterLayout from "./footerLayout.tsx";
import Cards from "../components/feauturesProducts.tsx"
const MainContainer = ({className}:Props) => {
    const newClassName = twMerge(
        "max-w-screen-xl py-10 px-4 mx-auto lg:px-0 ",
        className
    );
    return (
        <div className={newClassName}>
           <HeaderCategory/>
            <MainImage></MainImage>
            <Cards></Cards>
            <PopularCategories></PopularCategories>
            <Blogs></Blogs>
            <FooterLayout></FooterLayout>

        </div>
    );
};

export default MainContainer;