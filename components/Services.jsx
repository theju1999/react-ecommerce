import "./styles/homeStyles.css";
import Header from "./Header";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import Adgp from "./adgp";
import productsData2  from "./data2";
import video from "./assets/med2.mp4";
// import bg from "./assets/Onlinemed.png";
import bn from "./assets/nanner-hm2.avif";
import tmb from "./assets/tmb2.jpg";
import { Link } from 'react-router-dom';


export default function Services() {
    return (
        <div className="">
           
          <Header />
          <h1 className="heading" style={{marginTop:'5rem'}}> 
          {/* Various <span>Categories</span> */}
           </h1>
<div className="row">
    <div className="product-list">
        {productsData2.map(product => (
          <div className="col-md-3 prd-st" key={product.id}>
          {/* <div className="col-md-4 prd-st" key={product.id}> */}
            <img src={product.image} alt={product.name} style={{ width: '80%',height:'55%' }} />
            <h1>{product.name}</h1>
            <p className="price">{product.price}</p>
            <p>{product.description}</p>
            <p><button className="add-btn">Add to cart</button></p>
          </div>
        //   </div>
         
        ))}
      </div>
      
      </div>
        <Footer/> 
        </div>
    );
  }

