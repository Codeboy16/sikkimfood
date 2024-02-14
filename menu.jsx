import Navbar from '../navbar';
import Footer from '../footer';
import './menu.css';
import data from './menudata.js';
import { useState } from 'react';
import Cards from '../cards/carts.jsx';
function Card(props){
  const [counter,setcounter]= useState(0);
  function increase(){
    if(counter<100){
      setcounter(counter+1);
      console.log(props.id);
      sessionStorage.setItem("Id",props.id);
      
    }else{
      setcounter(counter);
    }

}
  function decress(){
    if(counter==0){
      setcounter(counter);
    }else{
      setcounter(counter-1)
    }

  }
  function tol(counter){
     setcounter(counter*2);
  }
    return(
        <>
          <div className="border rounded w-64 h-82 mx-3 my-3 bg-slate-900 text-white Menu">
            <div className="p-2 text-center">
               <img src={props.img} className='rounded zoom'/>
               <h1 className="font-medium text-2xl pt-2">{props.name}</h1>
               <p className="py-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
               <span className='flex justify-around'>
                 <span className='flex'>
                 <h2 className='text-2xl font-semibold'>₹{props.new}*</h2>
                  <del className='px-2 text-lg text-gray-400 font-bold'>₹{props.old}</del>
                 </span>
                 <span className='flex justify-items-center bg-gray-700 rounded my-1'>
                 <i className="ri-subtract-line text-2xl cursor-pointer" onClick={decress}></i>
                 <p className='text-2xl px-2'>{counter}</p>
                 <i className="ri-add-line text-2xl cursor-pointer" onClick={increase}></i>
                 </span>
               </span>
               <span className='flex justify-around py-2 text-gray-400'>
               <p className='text-xl text-left'>50% offer*</p>
               <p className='text-xl'>Tol ₹{counter*props.new}/-</p>
               </span>
            </div>
          </div>
        </>
    )
}
function Menu(){
    return(
        <>
        <Navbar/>
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold text-center py-2">MENU BAR</h1>
        <div className='flex justify-around justify-items-center Ordertop'>
          <span className='py-10'>
            <h1 className='text-2xl md:text-4xl text-[rgba(2, 6, 12, 0.75)] font-extrabold'>
              Order Food<br/>
              Online In Sikkim<br/>
               Free Home Delivery*
            </h1>
          </span>
          <span className='hidden md:inline-block'>
            <img src="/images/dweb_header.webp" className='w-96'/>
          </span>
        </div>
         {/* Cards Section */}
        <div className="flex flex-wrap justify-center">
          {data.map((val)=>{
            return(
                <Card id={val.id}img={val.img} name={val.name} new={val.new} old={val.old}/>
            )
          })
          }
        </div>
        <Footer/>
        </>
    )
}
export default Menu;