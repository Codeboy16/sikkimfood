import './navbarstyle.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

function logic(){
    let menu = document.getElementById('menu');
    let cross = document.getElementById('cross');
    let phone_menu = document.getElementById('phone_menu');
    
    menu.addEventListener('click',()=>{
        menu.className = 'hidden';
        cross.className = 'inline-block text-2xl md:hidden';
        phone_menu.className = 'flex-col';
    })
    
    cross.addEventListener('click',()=>{
        menu.className = "inline-block";
        cross.className = "hidden";
        phone_menu.className = "hidden";
    })
}

function Navbar(){
    // logic();

    return(
        <>
    <div className="bg-red-600 w-[100%]">
    <div className="flex justify-around">
       <Link to="/"><img src={logo} className="img-fluid w-32" /></Link> 
        <div className="my-auto hidden md:inline-block">
            <span className="inline-block relative " id="search_box">
                <i className="ri-search-line p-[2px] px-2 absolute right-[18.5rem]" id="search_icon"></i>
                <input type="search" placeholder="Search" className="w-[19rem] h-7 px-2" id="search"/>            
            </span> 
           <span className="">
              <Link to="/" id="notification"><i class="ri-home-4-line text-2xl px-2"></i></Link>
              <Link to="../menu" id="food"><i className="material-symbols-outlined px-2">restaurant</i></Link>
              <Link to="../cards" id="cart"><i className="ri-shopping-cart-2-line text-2xl px-2 pb-0"></i></Link>
              {/* <Link to="#" id="notification"><i className="ri-notification-3-line text-2xl px-2"></i></Link> */}
              <Link to="../user/" id="user"><i className="ri-user-line text-2xl px-2"></i></Link>
            </span>
        </div>
        {/*Phone View */}
        <div className="inline-block md:hidden my-auto">
            <span className="">
                <Link to="../user/" id="user"><i className="ri-user-line text-2xl px-2"></i></Link>
                <a href="#" id="notification"><i className="ri-notification-3-line text-2xl px-2"></i></a>
                <Link to="../cards" id="cart"><i className="ri-shopping-cart-2-line text-2xl px-2"></i></Link>
              </span>
              <Link to="../menu"  id="menu">
             <i className="ri-menu-3-fill text-3xl " ></i>               
              </Link>
             <span className="hidden" id="cross">
                <i className="ri-close-line text-3xl " ></i> 
             </span>
        </div>
    </div>    
        {/* <div className="flex flex-col justify-center hidden lg:hidden" id="phone_menu">
            <span className="flex flex-col justify-center text-center">
                <a href="#" className="text-xl py-2 font-semibold">HOME</a>
                <a href="#" className="text-xl py-2 font-semibold">MENU</a>
                <a href="#" className="text-xl py-2 font-semibold">ABOUT</a>
                <a href="#" className="text-xl py-2 font-semibold">CONTACT</a>
                <a href="#" className="text-xl py-2 font-semibold">ORDER</a>
            </span>
       </div> */}
    </div>
        </>

    )

}

export default Navbar;