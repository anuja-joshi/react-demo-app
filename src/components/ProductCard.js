import React from 'react';
import { Card, Button, CardTitle, CardText, CardHeader,
 CardBody, CardFooter} from 'reactstrap';

const ProductCard = ({product}) => {
  let {name, category, description, price, stocked} = product
  return (
    <div className="mb-5">
      <Card >
        <CardHeader>
          <h3> {name} </h3>
          {!stocked && 'Out of stock'}
        </CardHeader>
        <CardBody>
          <CardTitle>category: {category}</CardTitle>
          <CardText>{description}</CardText>
          <Button>Add To Cart</Button>
        </CardBody>
        <CardFooter>Price: {price}</CardFooter>
      </Card>
    </div>
  );
}

export default ProductCard;