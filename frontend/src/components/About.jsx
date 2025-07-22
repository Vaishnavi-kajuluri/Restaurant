import React from 'react';
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <div className="heading"></div>
                <p>The Main aim of us is Food and only food</p>
            </div>
            <p className='mid'>
            Food is more than just sustenance; it’s an experience that brings people together. From the rich, creamy textures of a well-made pasta dish to the bold, fiery kick of a perfectly spiced curry, every bite tells a story. The aroma of freshly baked bread filling a kitchen can evoke feelings of warmth and nostalgia, while the crunch of a crisp apple offers a refreshing contrast to a hot summer day. Whether it’s the comforting embrace of homemade soup on a cold evening or the indulgence of a decadent chocolate dessert, food has t.
            </p>
        <Link to={"/"}>Explore Menu <span>   
          <HiOutlineArrowNarrowRight/>      
        </span>
        </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  )
}

export default About
