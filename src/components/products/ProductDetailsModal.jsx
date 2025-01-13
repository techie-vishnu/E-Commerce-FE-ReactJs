import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

export default function ProductDetailsModal({ pData, show, onHide }) {
    if (pData !== null) {
        return (
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {pData.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {pData.images.length > 0 &&
                        <Carousel data-bs-theme="dark">
                            {pData.images.map((image, i) => {
                                return (
                                    <Carousel.Item key={i}>
                                        <img className="d-block w-100" src={image} alt={pData.title + '_' + i} />
                                        <Carousel.Caption>
                                            {/* <h5>First slide label</h5>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    }
                    <p>
                        {pData.description}
                    </p>
                    <p>
                        Price: ${pData.price} /-
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-sm' variant='secondary' onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}