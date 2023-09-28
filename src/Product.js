import './Product.css';

const Product = ({ title, thumbnail, price,
    discountPercentage, Rating }) => {

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="image-container">
                                <div className="first">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="discount">-{discountPercentage}%</span>
                                        <span className="wishlist">
                                            <i className="fa fa-heart-o" />
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default Product