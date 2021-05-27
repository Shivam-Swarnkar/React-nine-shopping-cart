import React from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    Button
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
    return (
        <Card className="mt-2 mb-1">
            <CardImg
                top
                height="250"
                widt="100%"
                src={product.largeImage}
            />
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText className="secondary">Price: Rs {product.productPrice}</CardText>
                <Button
                    color="success"
                    onClick={() => addInCart(product)}>
                    Add to cart
                </Button>
            </CardBody>
        </Card>
    )
}

export default CartItem;