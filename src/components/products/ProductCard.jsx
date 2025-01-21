import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cart/cartSlice';

export default function ProductCard({ product, productCallback }) {
    const dispatch = useDispatch()
    const hasProductInCart = useSelector(state => state.cart.cartArray.find(p => product.id == p.id) ? true : false)

    return (
        <div className='col-sm-6 col-md-4 col-lg-3 p-3'>
            <Card key={product.id} className='shadow' title={product.description} >
                <Card.Img variant="top" src={product.thumbnail} onClick={() => productCallback(product)} />
                <Card.Body onClick={() => productCallback(product)}>
                    <Card.Subtitle className="text-muted"><i>{product.category}</i></Card.Subtitle>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text className="text-end">
                        <span >
                            ${product.price} /-
                        </span>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {product.stock > 15 ?
                        (hasProductInCart ?
                            <Button variant="danger" className='btn-sm float-end' onClick={(e) => { e.preventDefault(); dispatch(removeFromCart(product)); }}>Remove from Cart</Button>
                            :
                            <Button variant="secondary" className='btn-sm float-end' onClick={(e) => { e.preventDefault(); dispatch(addToCart(product)); }}>Add to Cart</Button>
                        ) : (
                            <Button variant="warning" className='btn-sm float-end' disabled>Out of Stock</Button>
                        )
                    }
                </Card.Footer>
            </Card>
        </div>
    )
}
