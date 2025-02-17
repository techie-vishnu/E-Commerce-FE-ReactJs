import { Link } from "react-router"
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../../store/cart/cartSlice';
import { useEffect, useState } from "react";

export default function Cart() {
    const dispatch = useDispatch();
    const cartArray = useSelector(state => state.cart.cartArray);
    const [cartTotal, setCartTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let total = 0;
        let items = 0;
        cartArray.map((c, i) => {
            total += c.count * c.price;
            items += c.count;
        })
        setCartTotal(total.toFixed(2));
        setTotalItems(items);
    }, [cartArray])

    return (
        <>
            <section className="h-100 h-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2 rounded-3 shadow">
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0">Shopping Cart</h1>
                                                    <h6 className="mb-0 text-muted">{totalItems} items</h6>
                                                </div>
                                                <hr className="my-4" />
                                                {cartArray.map((product, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                                    <img src={product.thumbnail} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-3">
                                                                    <h6 className="text-muted">{product.category}</h6>
                                                                    <h6 className="mb-0">{product.title}</h6>
                                                                </div>
                                                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                    {/* <button className="btn btn-link px-2">
                                                                        <i className="bi bi-minus"></i>
                                                                    </button> */}
                                                                    <input type="number" id={'p-quantity-' + product._id} min="0" max={product.stock} value={product.count} name={'p-quantity-' + product._id}
                                                                        className="form-control form-control-sm" onChange={(e) => { dispatch(updateQuantity({ product: product, count: e.target.value })); }} />
                                                                    {/* <button className="btn btn-link px-2">
                                                                        <i className="bi bi-plus"></i>
                                                                    </button> */}
                                                                </div>
                                                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                    <h6 className="mb-0">${(product.price * product.count).toFixed(2)}</h6>
                                                                </div>
                                                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                    <Button variant="outline-danger" className="btn-sm" onClick={() => { dispatch(removeFromCart(product)) }}><i className="bi bi-x"></i></Button>
                                                                </div>
                                                            </div>
                                                            <hr className="my-4" />
                                                        </div>
                                                    )
                                                })}

                                                <div className="pt-5">
                                                    <h6 className="mb-0">
                                                        <Link to={'/'}>
                                                            <i className="bi bi-arrow-left me-2"></i>
                                                            Continue shopping
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 bg-body-tertiary">
                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">items {totalItems}</h5>
                                                    <h5>$ {cartTotal}</h5>
                                                </div>
                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">Shipping</h5>
                                                    <h5>$ 0</h5>
                                                </div>
                                                {/* <h5 className="text-uppercase mb-3">Shipping</h5>
                                                <div className="mb-4 pb-2">
                                                    <select data-mdb-select-init>
                                                        <option value={1}>Standard-Delivery- €5.00</option>
                                                        <option value={2}>Two</option>
                                                    </select>
                                                </div>
                                                <h5 className="text-uppercase mb-3">Give code</h5>
                                                <div className="mb-5">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                                                    </div>
                                                </div> */}
                                                <hr className="my-4" />
                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Total price</h5>
                                                    <h5>$ {cartTotal}</h5>
                                                </div>
                                                <button type="button" className="btn btn-dark btn-block btn-lg mt-auto">
                                                    Proceed to Checkout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
