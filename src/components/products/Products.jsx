import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ProductList from "./ProductList";
import axios from 'axios';

function Products() {

    const [productsUrl, setProductsUrl] = useState('https://dummyjson.com/products');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [order, setOrder] = useState(['asc', 'desc']);
    const [sortBy, setSortBy] = useState(['title', 'discountPercentage', 'rating', 'stock', 'price', 'category']);

    // For Categories Dropdown
    async function getCategories() {
        await axios.get('https://dummyjson.com/products/categories')
            .then(res => {
                setCategories(res.data)
            })
            .catch((error) => { });
    }

    async function loadProducts() {
        setIsLoading(true);
        await axios.get(productsUrl)
            .then(res => {
                setProducts(res.data.products)
            })
            .catch((error) => { })
            .finally(function () {
                setIsLoading(false);
            });
    }

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        if (event.target.value !== '') {
            setSearchQuery('');
        }
    }

    const handleSearchChange = (event) => {
        setSelectedCategory('');
        setSearchQuery(event.target.value);
    }

    const onSearchClick = () => {
        setSearchURL();
    }

    function setSearchURL() {
        let randomSortOrder = 'sortBy=' + sortBy[Math.floor(Math.random() * sortBy.length)] + '&order=' + order[Math.floor(Math.random() * order.length)];

        if (selectedCategory.trim() !== '')
            setProductsUrl('https://dummyjson.com/products/category/' + selectedCategory.trim() + '?' + randomSortOrder);
        else if (searchQuery.trim() !== '')
            setProductsUrl('https://dummyjson.com/products/search?limit=0&q=' + searchQuery.trim());
        else
            setProductsUrl('https://dummyjson.com/products?' + randomSortOrder);
    }

    useEffect(() => {
        getCategories();
    }, []);
    useEffect(() => {
        loadProducts();
    }, [productsUrl]);
    useEffect(() => {
        setSearchURL();
    }, [selectedCategory]);

    return (
        <>
            <Container className="mt-4">
                <Row className="mb-3">
                    <Col sm={6} md={4} className="mb-2">
                        <Form.Select value={selectedCategory} aria-label="Categories" onChange={handleCategoryChange}>
                            <option value=''>All Products</option>
                            {categories.map((category, index) => {
                                return (
                                    <option value={category.slug} key={index}>{category.name}</option>
                                )
                            })}
                        </Form.Select>
                    </Col>
                    <Col sm={6} md={8} className="mb-2">
                        <InputGroup>
                            <Form.Control placeholder="Search all products..." value={searchQuery} aria-label="Text input with dropdown button" onChange={handleSearchChange} onKeyDown={e => { if (e.key === 'Enter') { onSearchClick() } }} />
                            <Button variant="outline-secondary" onClick={onSearchClick} disabled={searchQuery.trim() !== '' ? false : true}>Search</Button>
                        </InputGroup>
                    </Col>
                </Row>
                <ProductList products={products} loading={isLoading} />
            </Container>
        </>
    )
}

export default Products