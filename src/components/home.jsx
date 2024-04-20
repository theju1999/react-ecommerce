import "./styles/homeStyles.css";

export default function home() {
    return (
        <div>
           <div className="bg-cl1 fnt-fam" style={{margin:'0'}}>
        <div className="container">    
           <div className=""> 
            <p className="fnt-sz1">Elevate Your Experience<br/> with React-pharma</p>
            <p className='fnt-sz2'>
            harum nesciunt ipsum debitis</p>
            <p className="rd-clr mr-sp fnt-sz3"> EMBARK ON A JOURNEY OF INNOVATION</p>
            <div className="mr-sp">
<button 
      className='bt-gt '>
      GET STARTED
    </button>
    <button 
      className=''>
    READ MORE
    </button>
  
            </div>
            <p className="mr-sp">We accept</p>
            <div className="dp-gt2 fnt-sz4">
 <div className="dp-gt">   
 <img src="./assets/sm-icon.png" alt="Snow"  style={{ width: '25px',height:'25px' }}/>         
<p className='text-start'>Digital marketing</p></div> 
<div className="dp-gt mr-nt">   
 <img src="./assets/sm-icon.png" alt="Snow"  style={{width: '25px',height:'25px' }}/> 
<p className='text-start'>software development</p></div>
<div className="dp-gt mr-nt2">   
 <img src="./assets/sm-icon.png" alt="Snow"  style={{ width: '25px',height:'25px' }}/> 
<p className='text-start'>seo</p></div>
<div className="dp-gt">   
 <img src="./assets/sm-icon.png" alt="Snow"  style={{width: '25px',height:'25px' }}/> 
<p className='text-start'>ui/ux</p></div>
            </div>
          </div>
        </div>
        
        </div>
        </div>
    );
  }

