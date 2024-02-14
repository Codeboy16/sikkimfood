import Navbar from '../navbar';
import Footer from '../footer';
import logo from '../logo.png';
function offer(){
  //Show Offer poster
  let random = Math.floor(Math.random()*6);
     let x;
     if(random==0){
        x = './images/poster.png';
     }else if(random==1){
      x = './images/poster1.png';
     }else if(random==2){
      x = './images/poster2.png';
     }else if(random==3){
      x = './images/poster3.png';
     }else if(random==4){
      x = './images/poster5.png';
     }
     else{
      x = './images/poster4.png';
     }
  return(
    <>
    <div>
      <img src={x} className='lg:h-[46rem] w-[100%] img-fluid'/>
    </div>
    </>
  )
}
function Home(){
 
    return(
        <>
        <Navbar/>
        {/* Image Silder */}
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/home_bg.png" class="d-block w-100 xl:h-[42rem] img-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/home_bg1.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/home_bg2.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
        </div>
        <div className="bg-[#b6b6b6] h-1"></div>
        {/* Desert */}
         <div className="container-fluid md:my-3">
          <div className="row">
              <h1 className='text-center font-bold text-2xl py-2'>Deserts</h1>
            <div className="col-6 col-md-3 text-center my-4">
              <img src="./images/desert_1.jpg" className='img-fluid w-48 h-48 md:w-80 md:h-80 mx-auto rounded'/>
                  <h1 className='text-2xl font-bold py-1'>Ice-Cream</h1>
                  <p className='font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis!</p>
            </div>
            <div className="col-6 col-md-3 text-center my-4">
              <img src="./images/desert_2.jpg" className='img-fluid w-48 h-48 md:w-80 md:h-80 mx-auto rounded'/>
                <h1 className='text-2xl font-bold py-1'>Cold-Driks</h1>
                 <p className='font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis!</p>
            </div>
            <div className="col-6 col-md-3 text-center my-4">
              <img src="./images/desert_3.jpg" className='img-fluid w-48 h-48 md:w-80 md:h-80 mx-auto rounded'/>
              <h1 className='text-2xl font-bold py-1'>Coffies</h1>
               <p className='font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis!</p>
            </div>
            <div className="col-6 col-md-3 text-center my-4">
              <img src="./images/desert_4.jpg" className='img-fluid w-48 h-48 md:w-80 md:h-80 mx-auto rounded'/>
              <h1 className='text-2xl font-bold py-1'>Cakes</h1>
              <p className='font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, perferendis!</p>
            </div>
          </div>
         </div>
         <div className="bg-[#b6b6b6] h-1"></div>
        {/* Offer section */}
           {offer()}
           <div className="bg-[#c2c2c2] h-1"></div>  
        {/* 2nnd menu */}
          <div className="container-fluid bg-[#2b1e16] text-white py-4">
          <div className="row flex justify-center">
             <div className="col-7 col-md-3">
                <img src="images/2ndmenu_1.png" className='mx-auto img-fluid w-20'/>
                <h1 className='text-center pt-3 font-bold'>No Minimum Order</h1>
                <p className='text-center font-semibold'>Order in for yourself or for the group,</p> 
                <p className='text-center font-semibold'>with no restrictions on order value</p>                

             </div>
             <div className="col-7 col-md-3 ">
             <img src="images/2ndmenu_2.png"className='mx-auto img-fluid w-20'/>
                <h1 className='text-center pt-3 font-bold'>Live Order Tracking</h1>
                <p className='text-center font-semibold'>Know where your order is at all times,</p> 
                <p className='text-center font-semibold'>from the restaurant to your doorstep</p>
              </div>
              <div className="col-7 col-md-3">
              <img src="images/2ndmenu_3.png" className='mx-auto img-fluid w-24 '/>
                <h1 className='text-center pt-3 font-bold'>Lightning-Fast Delivery</h1>
                <p className='text-center font-semibold'>Experience Swiggy's superfast delivery</p> 
                <p className='text-center font-semibold'>for food delivered fresh & on time</p>
              </div>
          </div>
        </div>
        <div className="bg-[#c9c9c9] h-1"></div>
        {/* Footer */}
        <Footer/>
        </>
    )
}

export default Home;