import React from "react";
import {
    Container,
    Button,
    ListGroup,
    ListGroupItem,
    Card,
    CardItem,
    CardBody,
    CardFooter,
    Row,
    Col, CardHeader
} from "reactstrap";

const Cart = ({ cartItem, buyNow, removeItem }) => {
    let amount = 0;

    cartItem.forEach(item => (
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    ))

    return (
        <Container fluid>
            <h1 className="text-success">Your cart</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img
                                    height={80}
                                    src={item.tinyImage}
                                />
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">{item.productName}</div>
                                <span>price :- Rs {item.productPrice}</span>
                                <Button
                                    color="danger"
                                    onClick={()=>removeItem(item)}>
                                    Remove
                                </Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>

            {/* If cart is empty */}
            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>Grand total</CardHeader>
                        <CardBody>
                            Your amount for {cartItem.length} product is Rs {amount}
                        </CardBody>
                        <CardFooter>
                            <Button
                                color="primary"
                                onClick={buyNow}>
                                Checkout
                            </Button>
                        </CardFooter>
                    </Card>
                ) : (
                        <h2 className="text-warning">Cart is empty</h2>
                    )
            }
        </Container>
    )
}

export default Cart;