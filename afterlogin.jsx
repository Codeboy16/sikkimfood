import Usermenu from "./userMenu";
import Userinfo from "./userinfo";
import MyOrder from "./myorder";
import Footer from "../footer";
import { Router,Routes,Route } from "react-router-dom";

import User from "./user";
function AfterLogin(){
    return(
        <>
        <div className="container pb-5">
          <div className="row">
            <div className="col-12">
               <div className="row py-2">
                 {/* Left */}
                  <Usermenu />
                  {/* Right */}
              <div className="hidden md:inline-block col-md-6">
            <div className="border rounded-2xl shadow w-96 my-5">
                {/* <MyOrder /> */}
                <Userinfo name="Rohit Singh" phone="7908015690" email="roithm_singh@srmus.edu.in" address="Tadong Gangtok,Sikkim 737103"/>  
             <Routes>
                    <Route path="/user/userinfo" element={<Userinfo />} />
            </Routes>              

            </div>
         </div>
        </div>
    </div>
    </div>
        </div>
        <Footer />
        </>
    )
}
export default AfterLogin;
// User Icon Control 2nd




