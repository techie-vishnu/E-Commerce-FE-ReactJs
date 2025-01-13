import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import ProductCard from "./ProductCard";
import { useState } from "react";
import ProductDetailsModal from "./ProductDetailsModal";


export default function ProductList({ products, loading = true }) {
    const [productData, setProductData] = useState(null);
    const handleProductCallback = (product) => {
        setProductData(product);
        setModalShow(true);
    };
    const [modalShow, setModalShow] = useState(false);

    if (loading) {
        return (
            <Row className="justify-content-center mt-5">
                <Spinner variant="secondary" animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Row>
        )
    } else {
        return (
            <>
                <Row>
                    {products.map((product, index) => {
                        return (
                            <ProductCard key={index} product={product} productCallback={handleProductCallback} />
                        );
                    })}
                    {products.length === 0 && <Col><Alert variant="warning" dismissible>No Products Found!!</Alert></Col>}
                </Row>
                <ProductDetailsModal pData={productData} show={modalShow} onHide={() => setModalShow(false)} />
            </>
        )
    }
}