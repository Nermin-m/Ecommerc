import Blog1 from '../images/blog1.png';
import Blog1C from '../images/blog1C.png';
import Blog2 from '../images/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large-removebg-preview.png';
import Blog2C from '../images/blog2C.jpg';
import Blog3 from '../images/blog3.jpg';
import Blog3C from '../images/blog3C.jpg';
import Blog4 from '../images/blog4.jpg';
import Blog4C from '../images/blog4C.jpg';
import Blog5 from '../images/blog5.png';
import Blog5C from '../images/blog5C.jpg';
import Blog6 from '../images/blog6.png';
import Blog6C from '../images/blog6C.jpg';
import Blog7 from '../images/blog7.png';
import Blog7C from '../images/blog7C.jpg';
import Blog8 from '../images/blog8.jpg';
import Blog8C from '../images/blog8C.jpg';
import NestedModal from '../components/nestedModal.tsx';

const blogImages = [
    {
        src: Blog6,
        srcC: Blog6C,
        title: 'Delivery',
    },
    {
        src: Blog7,
        srcC: Blog7C,
        title: 'Online Payment',
    },
    {
        src: Blog8,
        srcC: Blog8C,
        title: 'Safety',
    },
    {
        src: Blog1,
        srcC: Blog1C,
        title: 'Favorite Brand',
    },
    {
        src: Blog5,
        srcC: Blog5C,
        title: 'Quality'
    },
    {
        src: Blog2,
        srcC: Blog2C,
        title: 'Telephone',
    },
    {
        src: Blog3,
        srcC: Blog3C,
        title: 'Clothing',
    },
    {
        src: Blog4,
        srcC: Blog4C,
        title: 'All Age Categories',
    }
];

const Blog = () => {
    return (
        <div style={{ padding: '20px',width:'100%',display:'flex',flexDirection:'row',flexWrap:'wrap',height:'760px',overflow:'hidden' }}>
            <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '15px', justifyContent: 'center',padding:'10px'}}>
                {blogImages.map((img, idx) => (
                    <NestedModal
                        key={idx}
                        img1={img.src}
                        img2={img.srcC}
                        title={img.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blog;
