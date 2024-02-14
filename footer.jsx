import Logo from './logo.png';
function Footer(){
    return(
        <>
<div className="container-fluid text-center bg-slate-900 text-white py-6">
  <div className="row align-items-start justify-center py-6">
    <div className="col-6 col-md-2">
       <span>
         <img src={Logo} className='w-36 rounded mx-auto'/>
         <p className='text-lg font-semibold py-3'>© 2024 HackQ Technology Pvt. Ltd</p>
       </span>
    </div>
    <div className="col-6 col-md-2">
        <h1 className='text-2xl font-bold pb-2'>Company</h1>
        <span className='flex flex-col'>
        <a href="#" className='py-1 text-gray-300'>About</a>
        <a href="#" className='py-1 text-gray-300'>Careers</a>
        <a href="#" className='py-1 text-gray-300'>Team</a>
        <a href="#" className='py-1 text-gray-300'>Sikkim Food</a>
        <a href="#" className='py-1 text-gray-300'>SF Instamart</a>
        <a href="#" className='py-1 pb-4 text-gray-300'>SF Genie</a>
      </span>
    </div>
    <div className="col-6 col-md-2">
      <span className='flex flex-col'>
        <h2 className='text-xl font-bold pb-2'>Contact Us</h2>
         <span className='flex flex-col'>
            <a href="" className='py-1 text-gray-300'>Help & Support</a>
            <a href="" className='py-1 text-gray-300'>Partner with us</a>
            <a href="" className='py-1 text-gray-300'>Ride with us</a>
         </span>
         <h1 className='text-xl font-bold pb-2'>Legal</h1>
         <span className='flex flex-col'>
            <a href="" className='py-1 text-gray-300'>Terms & Conditions</a>
            <a href="" className='py-1 text-gray-300'>Cookie Policy</a>
            <a href="" className='py-1 text-gray-300'>Privacy Policy</a>
         </span>
      </span>
    </div>
    <div className="col-6 col-md-2">
        <h1 className='text-xl font-bold pb-2'>We deliver to:</h1>
     <span className='flex flex-col'>
        <a href="#" className='py-1 text-gray-300'>Gangtok</a>
        <a href="#" className='py-1 text-gray-300'>Namchi</a>
        <a href="#" className='py-1 text-gray-300'>Mangan</a>
        <a href="#" className='py-1 text-gray-300'>Ravangala</a>
        <a href="#" className='py-1 text-gray-300'>Ranipool</a>
        <a href="#" className='py-1 text-gray-300'>Rangpo</a>
     </span>
    </div>
  </div>
</div>
        </>
    )
}
export default Footer;