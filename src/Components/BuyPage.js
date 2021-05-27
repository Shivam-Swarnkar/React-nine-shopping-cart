import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { Container, Col, Row } from "reactstrap";
import Axios from "axios";
import { random, commerce } from "faker";

const BuyPage = ({ addInCart }) => {

    const [product, setProduct] = useState([]);

    const apiKey = "563492ad6f91700001000001efb5cd6631104793b4ba1cd02d1ac274";
    const url = "https://api.pexels.com/v1/search?query=cats&per_page=6&page=1";

    const fetchPhotos = async () => {
        const response = await Axios.get(url, {
            headers: {
                Authorization: apiKey
            }
        })

        const { photos } = response.data;
        const allProduct = photos.map(photo => ({
            largeImage: photo.src.large,
            smallImage: photo.src.small,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()

        }))

        setProduct(allProduct);

    }
    
    useEffect(() => {
        fetchPhotos();
    }, [])

    return (
        <Container fluid>
            <h1 className="text-center text-success">
                Buy Page
            </h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CartItem addInCart={addInCart} product={product}></CartItem>
                    </Col>
                ))}
            </Row>
        </Container>
    );

}

export default BuyPage;