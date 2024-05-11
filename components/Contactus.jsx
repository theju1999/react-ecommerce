// import img1 from '../assets/17667.jpg';
import "./styles/ContactusStyles.css"
// import image1 from "../assets/4956898_2592288-removebg-preview.png";
import image1 from "./assets/1111.webp";
import Header from "./Header";
import Footer from "./Footer";

export default function Contactus(){
  return(
    <>
    <div className="" style={{}}>
    <Header />
  <div className='bg-gt-t' style={{  }}>
  <img src={image1} alt="background image" className='ContactbackGroundImage'/>
  <div className="overlay-text bg-txt" style={{  }}>
    <h1 className="bg-txt-1"  >Your dream websites,<br/> made a reality</h1>
    <p className="bg-txt-2">Modern custom designs tailored to your <br /> every want & need, so you can focus on <br /> what matters.</p>
    <button className='getinTouchButton'><a href="mailto:contact@teksolvent.com" style={{textDecoration:'none',padding:'20px 30px',color:'#ffff'}}>Get in touch</a></button>
  </div>
</div>
<div className='techInfo'>


<div className='row' style={{overflow:'hidden'}}>
<div  className="col-md-6 col-12">
        <div className='text-center'>
        {/* <img src={image1} alt="" className='img-sz-gt' /> */}
      </div>
      </div>
      <div className="col-md-6 col-12  " style={{color:"white"}}>
      <div className='txt-gt-tch' style={{textAlign:'justify'}}>
        <p>We specialize in leveraging cutting-edge technologies such as React.js, Angular, HTML, CSS, and JavaScript to craft seamless digital solutions tailored to meet the unique needs of our clients. Our team's deep expertise in these languages and frameworks allows us to deliver robust, efficient, and user-friendly web applications and interfaces. Whether you need a dynamic and interactive user interface or a responsive and scalable web application, we have the skills and knowledge to bring your vision to life.</p>
      </div>
      </div>
</div>
</div>
<Footer/> 
    </div>
    </>
  );
}
