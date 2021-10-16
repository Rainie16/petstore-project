import React, { FC, useEffect, useState } from "react";
import { ReduxState } from "../../shared/constants/constants";
import { Product } from "../../shared/models/product";
import ProductOverview from "../product-overview/ProductOverview";
import { productDetailById } from "../../actions/products.action";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./ProductDetails.scss"

const ProductDetails: FC<ProductDetailsProps> = ({
  match,
  handleProductDetailById,
}) => {
  const id = match.params.id;
  const [details, setDetails] = useState<any>({});
  useEffect(() => {
    const handleGetData = async () => {
      try {
        const result: any = await (!!handleProductDetailById &&
          handleProductDetailById(id));
        if (result?.payload.status === 200) {
          setDetails(result?.payload.data);
          console.log("result", result);
        } else throw result.payload;
      } catch (error) {
        console.log("Product by Type error :", error);
      }
    };
    handleGetData();
  }, [match]);

  return (
    <div className="productDetails">
      <img src={details.image} alt="img"/>
      <div>
        <div>{details.brand}</div>
        <div>{details.name}</div>
        <div>price: {details.price}</div>
        <div>stock: {details.stock}</div>
        <input type="text"></input>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products }: ReduxState) => {
  return { products };
};

const mapDispatchToProps = (dispatch: any) => ({
  handleProductDetailById: (id: string) => dispatch(productDetailById(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
);

interface ProductDetailsProps {
  // product?: Product;
  match?: any;
  handleProductDetailById?: (id: string) => object;
}
