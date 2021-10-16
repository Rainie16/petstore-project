import React,{FC} from "react";
import { withRouter, Link } from "react-router-dom";
import { Card } from "antd";
import './Banner.scss';
import {Product} from "../shared/models/product";

const Banner:FC<BannerProps> = ({}) => {
  return (
    <div className='banner image'>
      <Link to={"/products/dog"}>
        <Card title="Dog" bordered={false} style={{ width: 500 }}>
            <img className="image1" src="https://blog.myollie.com/content/images/2019/11/dog-in-sunglasses-eating-movie-theater-popcorn.jpg" alt="dog-image"/>
          <p>Shop dog products! </p>
        </Card>
      </Link>
      <Link to={"/products/cat"}>
        <Card title="Cat" bordered={false} style={{ width: 500 }}>
            <img src="https://media.istockphoto.com/photos/black-cat-on-yellow-background-friday-13th-picture-id1216489400?k=20&m=1216489400&s=170667a&w=0&h=JjAnFGslsk6ioEe0y2MC1BituWCrkOzO6StZI0CxfDQ=" alt="cat-image"/>
          <p>Shop cat products!</p>
        </Card>
      </Link>
    </div>
  );
};

export default withRouter(Banner);

interface BannerProps {
    match?:any;
}