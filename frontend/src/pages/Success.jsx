import React, { useEffect } from 'react'
import { useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-scroll'
const Success = () => {
  const [countDown,setCountDown]=useState(10);
  const navigate =useNavigate();
  useEffect(()=>{
     const timeoutId=setInterval(()=>{
         setCountDown(preCount =>{
          if(preCount===1){
          clearInterval(timeoutId);
          navigate('/');
          }
          return preCount-1;
         });
     },1000);
     return ()=>clearInterval(timeoutId);
  },[navigate]);
  return (
    <>
        <section className='notFound'>
          <div className="container">
            <img src='/sandwich.png' alt=""/>
            <h1>Redirecting to Home in {countDown} seconds...</h1>
             <Link to={'/'}> <HiOutlineArrowNarrowRight/></Link>
          </div>
        </section>
    </>
  )
}

export default Success
