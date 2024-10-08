import { useState } from "react";
import Header from "../Header/Header";
import img24 from '../Mechanics/images/AUTONIX_icons/Automotive.png';
import swal from 'sweetalert2';

export default function AddProductForm(){

    const [pname,setpname]=useState("");
    const [pprice,setpprice]=useState("");
    const [pdesc,setpdesc]=useState("");
    const [pimg,setpimg]=useState("");
    const token = localStorage.getItem("token");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data1={
            "name": pname ,
            "price": pprice,
            "description": pdesc ,
            "image": pimg};
        if(!token){
          swal.fire("Not logged in!!","Please login first to add new products");
          return;
        }
        if (!pname || !pprice || !pdesc || !pimg) {
            swal.fire("Incomplete data!!","Please fill in all fields.");
            return;
        }
        console.log(data1, token)
        fetch("http://localhost:8282/admin/products/add", {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
             },
            body: JSON.stringify(data1)
        })
        .then((response) => {
            if (response.status === 200) {
              console.log("New Customer added");
              swal.fire("Success!!","Item added successfully");
              setpname("");
              setpprice("");
              setpdesc("");
              setpimg("");
            } else {
              console.error("Forbidden: Invalid or expired token", token);
            }
        })
        .catch(error => {
            console.error("Error adding item:", error);
            window.alert("Failed to add item");
        });

           
      }

    return (
        <>
        <Header buttonvisible="none"/>
            <div id="search">
        <div className="over">
          <div className="logo1">
            <img src={img24} alt="" style={{ zIndex: 0 }} />
            <div className="name"  style={{ fontFamily: "'RS'", color: "#fff", fontSize: "65px"}}>Autonix</div>
          </div>
          <div className="form" style={{width:"500px !important"}}>
            <form onSubmit={handleSubmit}>
              <fieldset name="form" style={{ color: "#fff" }}>
                <p style={{ fontSize: "30px", fontWeight: 400 }}>PRODUCT DETAILS</p>
                <br/>
                <input id="e" type="text" value={pname} placeholder="Product Name" required onChange={(e)=>setpname(e.target.value)}/>
                <br/>
                <input id="price" type="text" value={pprice} placeholder="Product Price" required onChange={(e)=>setpprice(e.target.value)}/>
                <br/>
                <input id="desc" type="text" value={pdesc} placeholder="Product Description" required onChange={(e)=>setpdesc(e.target.value)}/>
                <br/>
                <input id="uimg" type="text" value={pimg} placeholder="Product Image URL" required onChange={(e)=>setpimg(e.target.value)}/>
                <br/>
                <br/>                
                <input type="submit" value="Add Product" style={{ fontSize: "20px", fontWeight: "lighter", backgroundColor: "#9ECA2E", width: "100%", padding: "20px" }}/>
                <br/><br/>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
        </>
    )
}