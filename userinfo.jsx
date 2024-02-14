import UserMaleImage from '/images/UserMaleProfile.png';
import UserFemaleImage from '/images/UserFemaleProfile.png';
import Usermenu from './userMenu';
import Menu from '../menu/menu';
function Userinfo(props){
    return (
        <>
        <div className='py-4'>
         <h1 className="text-2xl font-bold text-center pb-2 underline">Account Info</h1>
            <div className='w-96'>
            <img src={UserMaleImage}  className='w-36 h-36 mx-auto'/>
            </div>
            {/* Detail */}
             <div className='text-center py-3'>
               <h1 className='py-1 font-bold text-xl'>{props.name}</h1>
               <h1 className='py-1 font-semibold text-lg'>+91-{props.phone}</h1>
               <h1 className='py-1 font-semibold text-lg'>{props.email}</h1>
               <h1 className='py-1 font-semibold text-lg'>{props.address}</h1>
             </div>
             {/* Button */}
             <div className='flex justify-center pb-3'>
                <button className='border border-black rounded px-3 mr-4 text-lg font-semibold hover:bg-danger' >My-Menu</button>
                <button className='border border-black rounded px-3 text-lg font-semibold'>Sign-Out</button>
             </div>
         </div>                    
                           



        </>
    )
}
export default Userinfo;
