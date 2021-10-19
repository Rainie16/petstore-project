import React, {FC, SyntheticEvent, useEffect, useState} from "react";
import { Product } from "../shared/models/product";
import { ReduxState } from "../shared/constants/constants";
import { connect } from "react-redux";
import { getProductsByType } from "../actions/products.action";
import "./Products.scss";
import ProductOverview from "./product-overview/ProductOverview";
import { withRouter, Link } from "react-router-dom";
import { resolveModuleName } from "typescript";
import { Space, Input } from "antd";

const Products: FC<ProductsProps> = ({
  match,
  //   products,
  handleGetProductsByType,
}) => {
  const type = match.params.type;
  // console.log(!!getProductsByType && getProductsByType(type));
  const [products, setProducts] = useState<Product[]>([]);
  const [keyword, setKeyword] = useState('');
  const [init, setInit] = useState<Product[]>([]);

  const {Search} = Input;

  useEffect(() => {
    const handleGetData = async () => {
      console.log(type);
      try {
        const result: any = await (!!handleGetProductsByType &&
          handleGetProductsByType(type));
        if (result?.payload.status === 200) {
          setInit(result?.payload.data);
          setProducts(result?.payload.data);
        } else throw result.payload;
      } catch (error) {
        console.log("Product by Type error :", error);
      }
    };
    handleGetData();
    console.log('[match]:',[match]);
//   history.push('/profile/id')
  }, [match]);


  // const onSearch = value => console.log(value);

  const changeHandler = (event: SyntheticEvent) => {
    const inputEle = event.target as HTMLInputElement;
    const word = inputEle.value;
    setKeyword(word);
    console.log('keyword:', keyword);
  };


  useEffect(()=>{
    searchHandler(keyword);
  }, [keyword])


  const searchHandler = (keyword: string) => {

    if(keyword){
    let filteredProduct = products.filter((p)=>{
    if(p.name.toLowerCase().startsWith(keyword)
        || p.brand.toLowerCase().startsWith(keyword))
      return p;
    }
    )
    console.log('after filtered products', products);
    setProducts(filteredProduct);
    }else{
      setProducts(init);
      console.log('init:', init);
    }
  }

  return (
    <div>
      <div className="search-bar">
        <Space>
          <Search placeholder="search by keyword" onSearch={searchHandler} onChange={changeHandler} style={{ width: 200 }} />
        </Space>
      </div>
      <div className="Products">
        {products?.map((p) => (
        <Link to={`/products/${type}/${p.id}`} key={p.name}>
          <ProductOverview product={p} />
        </Link>
        ))}
      </div>
    </div>

    );
    };

const mapStateToProps = ({ products }: ReduxState) => {
  return { products };
};

const mapDispatchToProps = (dispatch: any) => ({
  handleGetProductsByType: (type: string) => dispatch(getProductsByType(type)),

});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Products)
);

interface ProductsProps {
  //   products?: Product[];
  handleGetProductsByType?: (type: string) => void;
  match?: any;
}
