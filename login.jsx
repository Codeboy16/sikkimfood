import './login.css';
import Loginimg from "/images/loginbg.jpg";
function Login(){
    return(
        <>
        <div className="flex justify-center justify-items-center h-full">
          <div className="border rounded flex justify-around justify-items-center my-36 w-[50rem] h-[30rem] shadow bg-slate-900">
            <div className="left">
            <img src={Loginimg} className="img-fluid rounded shadow" />
            </div>
            <div className="right text-white border">
              <form method='get'>
                 <h1 className='text-2xl font-semibold'>Login </h1>
                 <div className=''>
                 <input type="text" placeholder='Email Id'/>
                 </div>
                 <div>
                  <input type="password" placeholder='Password'/>
                 </div>
              </form>
            </div>
          </div>

        </div>
      </>
    )
}
export default Login;