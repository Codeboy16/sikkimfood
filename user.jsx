import Navbar from "../navbar";
import { Link } from "react-router-dom";
import Footer from "../footer";
import AfterLogin from "./afterlogin";
import Iconlogin from "../Logindata/iconlogin";
import { BrowserRouter } from "react-router-dom";
let User = ()=>{
    return(
        <>
        <Navbar/>
        {/* <AfterLogin />       */}

         <AfterLogin/>
        </>
    )
}
export default User;
// User Icon Control 1st