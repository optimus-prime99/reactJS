import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

function ProductCard(props) {
  //props.product: the product we are selling

  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id); 

  return (
    <Card>
        <Card.Img variant="top" style={{height: 300 + 'px'}} src={product.image}></Card.Img>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        { productQuantity > 0 ?
            <>
                <Form as={Row}>
                    <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                    <Col sm="6">
                        <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                        <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                    </Col>
                </Form>
                <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from Cart</Button>
            </>
            :
            <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
        }
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
