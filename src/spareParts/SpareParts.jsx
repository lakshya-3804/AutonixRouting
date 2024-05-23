import Footer from "../Footer/footer.jsx";
import Header from "../Header/Header";
import "./SpareParts.css";
import TrendingCard from "./TrendingCard";
import dat from "./trendingCardData.js"
import { useEffect , useState } from "react";
import AdminProdCard from "../adminlogin/AdminProdCard";

import '../adminlogin/ProductList.css';
export default function SpareParts(){
    function fill(item){
        return <TrendingCard 
        srcImg={item.srcImg} 
        cardName={item.cardName} 
        priceBefore={item.priceBefore} 
        priceAfter={item.priceAfter} />
    }
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])

    
    function fill2(item) {
      return <AdminProdCard
              id={item.id}  // Assuming each item has a unique 'id'
              pname={item.name}
              pprice={item.price}
              pimg={item.image} 
              pdesc={item.description}
              cdis="none" />
      
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
      fetch("http://localhost:8282/admin/products")
          .then((res) => {
              return res.json();
          })
          .then((result) => {
              setData(result);
              console.log(result);
          })
  }, []);

    return(
        <>
        <Header />
        <div class="title">
      <h1 class="title-shop">AUTONIX</h1>
      <img src={require("./essentials/img/Autonix-logo.png")} class="logo" />
    </div>

    <article class="banner">
      <div class="card__img">
        <img className="img" src={require("./essentials/img/1.webp")} />
      </div>
      <div class="card__name">
        <p>Spare Parts at best price</p>
      </div>
      <div class="card__content">

        <div class="card__text">
          <div>
            <span class="card__cont card__cont--now">Explore the world of Autoparts.</span>
          </div>
        </div>
        <p>AUTONIX</p>
      </div>
    </article>

    
    <div class="trending">
      <h2>Trending parts offer</h2>
    </div>
    <main class="main bd-grid">      
      {dat.map(fill)}      
    </main>

    <main>
                <h1 className="prodhead">Product List</h1>
                <div className="prodcontainer">
                    {data.map(fill2)}
                </div>
          </main>
    
    {/* <main>

      <div class="companyHead"><h2>Shop By Brands</h2></div>
      <div class="ShopByCompany">
        
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/23/l2AZQYjw/hyundai-logo-d17c.jpg" alt="" />
        </div>
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/23/l2AZQYjw/mahindra-mahindra-logo-21b3.jpg" />
        </div>
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/23/l2AZQYjw/toyota-logo-b9dd.jpg" />
        </div>
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/23/l2AZQYjw/tata-logo-ca08.jpg" />
        </div>
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/23/l2AZQYjw/honda-logo-8791.jpg" />
        </div>
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/23/l2AZQYjw/ford-logo-a55e.jpg" />
        </div>
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/23/l2AZQYjw/renault-logo-e98f.jpg" />
        </div>
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/23/l2AZQYjw/kia-logo-d6ca.jpg" />
        </div>
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/23/l2AZQYjw/volkswagen-logo-71db.jpg" />
        </div>
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/23/l2AZQYjw/nissan-logo-54b5.jpg" />
        </div>
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/23/l2AZQYjw/skoda-logo-7c3c.jpg" />
        </div>
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/23/l2AZQYjw/audi-logo-bd83.jpg" />
        </div>
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/24/JLzfMntl/bmw-logo-3064.jpg" />
        </div>
        <div class="card2">
          <img src="https://img.indianauto.com/2020/07/24/JLzfMntl/mercedes-benz-cars-logo-660c.jpg" />
        </div>
        
        

      </div>
    </main> */}
    <Footer />
        </>
    )
}