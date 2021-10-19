import {Product} from "../../shared/models/product";
import "./ProductOverview.scss"

const ProductOverview = ({product}: ProductProps) => {

    return (
        <div className="ProductOverview">
            <img className="product-image" src={product.image} alt={product.name}/>
            <div className="product-info-overlay">
                <div className="product-info">{product.brand}</div>
                <div className="product-info">{product.name}</div>
                <div className="product-info">{product.price}</div>
            </div>
        </div>
    );
};

export default ProductOverview;

interface ProductProps {
    product: Product
    children?: any
}