import { Link } from "react-router-dom";
import User from "./user";
function Usermenu(){
return (
    <>
    <div className="col-12 col-md-6">
                         <h1 className="text-2xl font-extrabold py-2">My Account</h1>
                      <div className="border rounded w-72 md:w-96 mx-auto shadow">
                        {/* User Section */}
                  <Link  to="/user/userinfo"><span className="flex justify-around pt-3 py-2 cursor-pointer">
                        <span className="flex">
                         <span class="material-symbols-outlined text-5xl my-auto text-primary">account_circle</span>    
                         <span className="pl-3">
                           <h1 className="text-xl font-semibold">Rohit Singh</h1>  
                           <h1 className="text-base">+91-7908015690</h1>  
                            <h1 className="text-base">roithm_singh@srmus.edu.in</h1>
                         </span>
                         </span>
                         <i class="ri-skip-right-line text-2xl py-auto"></i>
                        </span>  
                  </Link>      
                        <hr className="w-64 mx-auto text-lg"></hr>
                        {/* Order Section */}
                  <Link to="/myorder">      
                        <span className="flex justify-around py-3 cursor-pointer">
                         <span className="flex">   
                        <span class="material-symbols-outlined text-3xl font-medium">shopping_cart</span>
                        <h1 className="pl-2 text-xl font-medium ">My Orders</h1>
                        </span> 
                        <i class="ri-skip-right-line text-2xl py-auto"></i>
                        </span>
                  </Link>      
                        <hr className="w-64 mx-auto text-lg"></hr>
                        {/* My List */}
                        <span className="flex justify-around py-3 cursor-pointer">
                         <span className="flex">   
                        <span class="material-symbols-outlined text-3xl font-medium">receipt_long</span>
                        <h1 className="pl-2 text-xl font-medium ">My List</h1>
                        </span> 
                        <i class="ri-skip-right-line text-2xl py-auto"></i>
                        </span>
                        <hr className="w-64 mx-auto text-lg"></hr>
                        {/* Track Order */}
                        <span className="flex justify-around py-3 cursor-pointer">
                         <span className="flex">   
                        <span class="material-symbols-outlined text-3xl font-medium">local_shipping</span>
                        <h1 className="pl-2 text-xl font-medium ">Track Order</h1>
                        </span> 
                        <i class="ri-skip-right-line text-2xl py-auto"></i>
                        </span>
                        <hr className="w-64 mx-auto text-lg"></hr>
                        {/* Delevery Adress */}
                        <span className="flex justify-evenly py-3 cursor-pointer">
                         <span className="flex">   
                        <span class="material-symbols-outlined text-3xl font-medium">location_on</span>
                        <h1 className="pl-2 text-xl font-medium ">Delivery Address</h1>
                        </span> 
                        <i class="ri-skip-right-line text-2xl py-auto"></i>
                        </span>
                        <hr className="w-64 mx-auto text-lg"></hr>
                        {/* Help */}
                        <span className="flex justify-around py-3 cursor-pointer">
                         <span className="flex">   
                        <span class="material-symbols-outlined text-3xl font-medium">help</span>
                        <h1 className="pl-2 text-xl font-medium ">Need Help</h1>
                        </span> 
                        <i class="ri-skip-right-line text-2xl py-auto"></i>
                        </span>
                        <hr className="w-64 mx-auto text-lg"></hr>
                        {/* Legal info */}
                        <span className="flex justify-evenly py-3 cursor-pointer">
                         <span className="flex">   
                        <span class="material-symbols-outlined text-3xl font-medium">description</span>
                        <h1 className="pl-2 text-xl font-medium ">Legal Information</h1>
                        </span> 
                        <i class="ri-skip-right-line text-2xl py-auto"></i>
                        </span>
                        <hr className="w-64 mx-auto text-lg"></hr>
                        {/* Logout */}
                        <span className="flex justify-around py-3 cursor-pointer">
                         <span className="flex">   
                        <span class="material-symbols-outlined text-3xl font-medium">logout</span>
                        <h1 className="pl-2 text-xl font-medium ">Sign-Out</h1>
                        </span> 
                        <i class="ri-skip-right-line text-2xl py-auto"></i>  
                        </span>

                       </div>

    </div>
    </>
)
}
export default Usermenu;