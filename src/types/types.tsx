export interface Props {
    children: React.ReactNode;
    className?: string;
}

export interface Footertype {
    title: string;
    src: string;
    description?: string;
    path?:string
}
export  interface QueryProps {
    category: string;
}
export interface NestedModalProps {
    img1: string;
    img2: string;
    title?: string;
    title2?: string;
}
export interface CategoryItem {
    id: string;
    name: string;
}
export interface CategoryResponse {
    name: string;
    data: CategoryItem[];
}
export interface BlogTs{
    img:string,
    title:string,
    description?:string,
}