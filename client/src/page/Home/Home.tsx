import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Content from '../../Components/Content/Content';
import Footer from '../../Components/footer/Footer';
import List from '../../Components/list/List';
import Service from '../../Components/Service/Service';
import Choose from '../../Components/choose/Choose';
import Slider from '../../Components/slider/Slider';
function Home() {
  return (
    <>
    <div className='header-hero'>
      <div style={{zIndex:"10",position:"relative"}}>
    <Navbar />
    </div>
    <Content />
    </div>
    <div className='foodcategory'>
    <List info={{
                        titre:" Food Category",
                        parag:"Choose Food Iteam",
                        im1:"./assert/plat1.png",
                        im2:"./assert/plat2.png",
                        im3:"./assert/plat3.png",
                        im4:"./assert/plat4.png",
                    }}/>
    </div>  
    <div className='chooseus'>
      <Choose />
    </div>
    <div className='Service'>
      <Service  info={{
                        num1:"420",
                        num2:"320",
                        num3:"30+",
                        num4:"220",

                    }}/>
      </div>              
    <div className='chef'>
    <List info={{
                        titre:"Chefs",
                        parag:"Meet Our Chef",
                        im1:"./assert/chef1.png",
                        im2:"./assert/chef2.png",
                        im3:"./assert/chef3.png",
                        im4:"./assert/chef4.png",

                    }}/>
    
    </div>
    
    <div className='slider'>
      <Slider />
    </div>
    
    <div className='footer'>
      <Footer />
    </div>
    </>
  );
}

export default Home;
