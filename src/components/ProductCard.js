import React from 'react';
import { Card, Button, CardTitle, CardText, CardHeader,
 CardBody, CardFooter} from 'reactstrap';

const ProductCard = ({product}) => {
  let {name, category, description, price} = product
  return (
    <div>
      <Card>
        <CardHeader>
          <h3> {name} </h3>
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