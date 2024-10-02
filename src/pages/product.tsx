
import ProductMain from "../components/ProductMain.tsx";

const Product = () => {
    return (
        <div>
            <div style={{background:'red',width: "100%",height:'auto',display:'flex',flexDirection:'column',}}>
            <ProductMain></ProductMain>
            </div>
        </div>
    );
};

export default Product;