import { useEffect, useState } from "react";
import ProductsData from "./data";
import Product from "./Product.js"
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState(ProductsData)

    const getProducts = async () => {
       const res =  await axios.get('http://localhost:8080/products')  // api call
        console.log(res.data);
        setProducts(res.data)
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            {products.map((product, index) => (
                <Product {...product} key={index}></Product>
            ))
            }
        </>
    )

}

export default ProductList;