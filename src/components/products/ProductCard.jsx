import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductCard({ product, productCallback }) {
    return (
        <div className='col-sm-6 col-md-4 col-lg-3 p-3'>
            <Card key={product.id} className='shadow' title={product.description} onClick={() => productCallback(product)}>
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                    <Card.Subtitle className="text-muted"><i>{product.category}</i></Card.Subtitle>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text className="float-end">
                        <span >
                            ${product.price} /-
                        </span>
                    </Card.Text>
                    {/* <Button variant="secondary" className='btn-sm float-end'>Add to Cart</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}
