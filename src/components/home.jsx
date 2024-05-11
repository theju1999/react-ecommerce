import "./styles/homeStyles.css";
import Header from "./Header";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import Adgp from "./adgp";
import productsData  from "./data";
import video from "./assets/med2.mp4";
// import bg from "./assets/Onlinemed.png";
import bn from "./assets/nanner-hm2.avif";
import tmb from "./assets/tmb2.jpg";
import { Link } from 'react-router-dom';


export default function home() {
    return (
        <div className="">
           
          <Header />

          <section>
        
<img src={bn} className="hm-bg"/>
          </section>
          <section className="about" id="about" style={{margin:'3rem'}}>

<h1 className="heading"> <span> About </span> us </h1>

<div className="row">
<div className="col-md-6">
    <div className="video-container">
    <video id='video' controls="controls" preload='none' width="600" height="350" poster={tmb} >
    <source id='mp4' src={video} type='video/mp4' /></video>
    </div>
    </div>
    <div className="col-md-6">
    <div className="">
        <h3>Why choose us?</h3>
        <p className="txt-hm" style={{marginBottom:'3rem'}}>Med 24/7 is a fast-growing online pharmacy that empowers people to buy medicines and other health 
          care products from the convenience of home 24/7 and 365 days a year.
          Med 24/7 is a fast-growing online pharmacy that empowers people to buy medicines and other health 
          care products from the convenience of home 24/7 and 365 days a year.
          Med 24/7 is a fast-growing online pharmacy that empowers people to buy medicines and other health 
          care products from the convenience of home 24/7 and 365 days a year.</p>
        
        {/* <a href="/Aboutus" className="btn-learn" style={{margin:'1rem'}}>learn more</a> */}
        <Link to="Aboutus" className="btn-learn" style={{ margin: '1rem' }}>Learn More</Link>
    </div>
    </div>
</div>

<div className="row" >
    <p className="" style={{fontSize:'30px',fontWeight:700,marginTop:'5rem'}}>Why Choose Us</p>
    <div className="col-md-4">
        <div className="" style={{background:'#160E33',padding:'1rem',color:'white',borderRadius:"5px"}}>
        <img src="img/icon-1.png" alt=""/>
        <div className="info">
            <h3>free delivery</h3>
            <span>All around Bangalore</span>
        </div>
        </div>
    </div>

    <div className="col-md-4">
    <div className="" style={{background:'#160E33',padding:'1rem',color:'white',borderRadius:"5px"}}>
        <img src="img/icon-3.png" alt=""/>
        <div className="info">
            <h3>offers</h3>
            <span>on all orders</span>
        </div>
        </div>

    </div>

    <div className="col-md-4">
    <div className="" style={{background:'#160E33',padding:'1rem',color:'white',borderRadius:"5px"}}>
        <img src="img/icon-4.png" alt=""/>
        <div className="info">
            <h3>secure paymens</h3>
            <span>protected by paypal</span>
        </div>
        </div>
    </div>
   
    </div>

    <h1 className="heading" style={{marginTop:'5rem'}}> Various <span>Categories</span> </h1>
<div className="row">
    <div className="product-list">
        {productsData.map(product => (
          <div className="col-md-3 prd-st" key={product.id}>
          {/* <div className="col-md-4 prd-st" key={product.id}> */}
            <img src={product.image} alt={product.name} style={{ width: '80%',height:'55%' }} />
            <h1>{product.name}</h1>
            <p className="price">{product.price}</p>
            <p>{product.description}</p>
            <p><button className="add-btn">Check Now</button></p>
          </div>
        //   </div>
         
        ))}
      </div>
      
      </div>
    {/* <div class="box-container">

        <div class="box">
            <span class="discount">-5%</span>
            <div class="image">
                <img src="img/crocinmain.png" alt=""/>
                <div class="icons">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="shoppings/fever.html" class="cart-btn">More</a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <h3>Antipyretics and analgesics</h3>
                <h4>fever,cough and flu medicines</h4>
               
            </div>
        </div>

        <div class="box">
            <span class="discount">-5%</span>
            <div class="image">
                <img src="img/dettol.jpg" alt=""/>
                <div class="icons">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="shoppings/anticeptic.html" class="cart-btn">More</a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <h3>ANTICEPTIC</h3>
               
            </div>
        </div>

        <div class="box">
            <span class="discount">-5%</span>
            <div class="image">
                <img src="img/orthooil.jpg" alt=""/>
                <div class="icons">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="shoppings/painreleivers.html" class="cart-btn">More</a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <h3>PAIN RELEIVERS</h3>
                <h4>Sprays,Gels And </h4>
              
            </div>
        </div>
        </div>
        <div class="box-container">

        <div class="box">
            <span class="discount">-5%</span>
            <div class="image">
                <img src="img/health4.jfif" alt=""/>
                <div class="icons">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="shoppings/healthnutrition.html" class="cart-btn">More</a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <h3>NUTRITION</h3>
              
            </div>
        </div>

        <div class="box">
            <span class="discount">-5%</span>
            <div class="image">
                <img src="img/dolodropschild.png" alt=""/>
                <div class="icons">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="shoppings/babycare.html" class="cart-btn">More</a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <h3>BABY CARE</h3>
               
            </div>
        </div>

        <div class="box">
            <span class="discount">-3%</span>
            <div class="image">
                <img src="img/bpchecker.jpg" alt=""/>
                <div class="icons">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="shoppings/healthtools.html" class="cart-btn">More</a>
                    <a href="#" class="fas fa-share"></a>
                </div>
            </div>
            <div class="content">
                <h3>HEALTH TOOLS</h3>
            </div>
        </div>

      

    </div> */}

</section>
<Footer />
        </div>
    );
  }

