import React from 'react';

import ProductItem from './ProductItem';
import Card from './Card';

import './Products.css';

const Products = (props) => {
  return (
    <Card className="products">
      <ProductItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        id={props.items[0].id}
      />
      <ProductItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        id={props.items[1].id}

      />
      <ProductItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        id={props.items[2].id}

      />
      <ProductItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        id={props.items[3].id}

      />
    </Card>
  );
}

export default Products;