import { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/Header";
import './ProductList.css';
import AdminProdCard from "./AdminProdCard";
import { Link } from "react-router-dom";

export default function ProductList() {

    function fill(item) {
        return <AdminProdCard
                id={item.id}  // Assuming each item has a unique 'id'
                pname={item.name}
                pprice={item.price}
                pimg={item.image} 
                pdesc={item.description} />
        
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/admin/products")
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                setData(result);
                console.log(result);
            })
    }, []);

    return (
        <>
            <Header buttonvisible="none" />
            <main>
                <h1 className="prodhead">Product List</h1>
                <div className="prodcontainer">
                    {data.map(fill)}
                    <Link to={"/addproduct"} className="addCardOption" title="Add product">+</Link>
                </div>
            </main>
            <Footer />
        </>
    )
}
