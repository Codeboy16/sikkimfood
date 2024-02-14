import Navbar from "../navbar";
import data from "../menu/menudata";
import { useState } from 'react';
import Footer from "../footer";
let final_price=0;
function Menuget(props){
    const [counter,setcounter]= useState(0);
    function increase(){
        if(counter<100){
          setcounter(counter+1);
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
      final_price = counter*props.price;
     return(
        <>
        <div className="col-10 border flex flex-wrap my-3 rounded mx-auto mb-2 shadow">
        <img src={props.img} className="w-fit xl:w-40 rounded"/>
        <div className="flex justify-between w-80">
          <div className="">
            <h1 className="pl-2 text-xl font-medium">{props.name}</h1>
            <h1 className="pl-2 text-xl font-medium">₹{props.price}/-</h1>
            <p className="pl-2 font-medium">Sold By: SkFood</p>
          </div> 
          <div className="md:my-auto">
            <h1 className="text-2xl font-medium">₹{final_price}/-</h1>
            <span className="flex py-2">
            <span className="material-symbols-outlined text-2xl cursor-pointer" onClick={decress}>do_not_disturb_on</span>
            <p className="text-2xl px-1">{counter}</p>
            <span className="material-symbols-outlined text-2xl cursor-pointer" onClick={increase}>add_circle</span>
            </span>
          </div>
        </div>

        </div>
        </>
     )
}
const Cards = ()=>{

    return (
        <>
        <Navbar/>
        <div className="container pb-5">
            <div className="row">
                <h1 className="text-3xl font-bold py-3 px-auto">My cards</h1>
                <div className="col-10 mx-auto">  
                  <div className="row">
                    {/* Left Side */}
                    <div className="col-12 col-md-6">
                      <div className="flex justify-between py-2">
                        <h1 className="text-xl font-bold">Groceries Basket</h1>
                        <h1 className="text-xl font-bold">Tol Price ₹{final_price}/-</h1>
                      </div>
                         {/* {data.map((x)=>{
                          return(
                              <>
                                <Menuget img={x.img} name={x.name} price={x.new} />
                              </>
                                  )})} */}       
                         <Menuget img={data[0].img} name={data[0].name} price={data[0].new} />
                         <Menuget img={data[6].img} name={data[6].name} price={data[6].new} />
                         <Menuget img={data[5].img} name={data[5].name} price={data[5].new} />
                         <Menuget img={data[9].img} name={data[9].name} price={data[9].new} />
                         <Menuget img={data[10].img} name={data[10].name} price={data[10].new} />
                         <div className="md:hidden my-3 border mx-auto w-52 rounded-3xl bg-red-600 text-xl font-bold py-2 text-center text-white cursor-pointer">Place Order</div>
                    </div>
                    {/* Right Side */}
                      <div className="hidden md:inline-block col-6 my-3">
                        {/* Card det */}
                        <div className="my-3 border flex justify-around py-2 bg-[#e5f7ee] rounded mt-3 shadow">
                            <div>
                            <h1 className="rounded-full bg-[#00b259] text-center text-xl font-semibold mx-4">1</h1>
                                <h2 className="text-lg font-semibold">Your Cart</h2>
                            </div>
                            <div>
                            <h1 className="rounded-full bg-[#00b259] text-center text-xl font-semibold mx-4">2</h1>
                                <h2 className="text-lg font-semibold">Order Review</h2>
                            </div>
                            <div>
                            <h1 className="rounded-full bg-[#00b259] text-center text-xl font-semibold mx-4">3</h1>
                                <h2 className="text-lg font-semibold">Payment</h2>
                            </div>

                        </div>
                        {/* Apply Coupion */}
                        <div className="my-3 border flex py-2 w-72 mx-auto rounded-2xl shadow">
                        <i className="ri-coupon-line text-2xl font-bold pl-5 text-[#00b259]"></i>
                        <h1 className="text-xl font-semibold pl-5">Apply Coupion</h1>
                        <i className="ri-arrow-right-s-line text-xl font-bold pl-5"></i>
                        </div>
                        {/* Odder summery */}
                        <div className="my-3 border mx-auto rounded-2xl shadow mb-3">
                            <h1 className="bg-[#00b259] text-white text-lg font-medium text-center py-2">Yay! You get FREE delivery with this order.</h1>
                            <p className="text-xl font-bold py-1 pl-5">Payments Details</p>
                            <div className="flex justify-around px-2 pt-2 pb-3">
                                <span className="text-xl">
                                    <h1 className="py-1">MRP Total</h1>
                                    <h1 className="py-1">Product Discount</h1>
                                    <h1 className="py-1">Delivery Fee</h1>
                                    <h1 className="py-1">Total</h1>
                                </span>
                                <span className="text-xl">
                                    <h1 className="py-1 font-semibold">₹{data[0].old}.00</h1>
                                    <h1 className="py-1 text-[#00b259] font-semibold">- ₹{data[0].new}.00</h1>
                                    <h1 className="py-1 text-[#00b259] font-semibold">FREE  <del>₹40.00</del></h1>
                                    <h1 className="py-1 font-semibold">₹{data[0].new}.00</h1>
                                    <h1 className="text-[#00b259] font-bold text-lg">You Saved ₹{data[1].old-data[0].new}.00</h1>
                                </span>
                            </div>
                        </div>
                        <div className="border mx-auto w-72 rounded-3xl bg-red-600 text-xl font-bold py-2 text-center text-white cursor-pointer shadow">Place Order</div>
                      </div>
                  </div>
                </div>
                <div className="col-10">
               {/* Next Line */}
                </div>
            </div>
        </div>
          <Footer />
        </>
    )
}

export default Cards;