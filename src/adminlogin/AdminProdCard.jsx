

export default function AdminProdCard(props){

    

    function deleteHandler(id){
        console.log(id)
        fetch(`http://localhost:8080/admin/products/delete/${id}` , {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            console.log(result);
            
        })
        window.location.reload(false);
    }


    return(
        <div style={{display:"flex" , flexDirection:"column" , width:"200px" , height:"300px" , border:"1px solid white" , alignItems:"center" , justifyContent:"space-evenly"}}>
            <div style={{width:"100%" , height:"60%"}}><img src={props.pimg}  alt="prodimage" style={{width:"100%" , height:"100%" , borderRadius:"0px"}}/></div>
            <p style={{margin:"0px",padding:"0px"}}>Rs.{props.pprice}</p>
            <h3 style={{margin:"0px",padding:"0px"}}>{props.pname}</h3>
            <p style={{margin:"0px",padding:"0px"}}>{props.pdesc}</p>
            <button style={{width:"50%" , display:props.cdis || "visible"}} onClick={()=>deleteHandler(props.id)} >Delete</button>
        </div>
    )
}