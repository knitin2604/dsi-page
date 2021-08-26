import './Content.css';


import React from 'react'

import pana from '../images/pana.png';
import pana2 from '../images/pana2.png';
import product from '../images/product.png';
import service from '../images/service.png';
import tech from '../images/tech.png';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';



function Content() {
    return (
        <div>

            {/*content1 */}
            <div className="content1">
             <ul className="content1-text">
           <Zoom>    <li style={{fontSize:"48px",fontWeight:"bold",fontStyle:"normal"}}>Making the most of the ever-growing <br/><span style={{color:"#EE4248"}}> information technology</span></li>
                 <li className="content12-text">Managed by a team of professional experts with extensive experience and impressive track records</li></Zoom>
              <Flip> <li><button className="card1button">Read More</button></li> </Flip>
             </ul>
            
             <ul className="content1-img">
                <li>
              <Fade left><img src={pana}/></Fade>
                </li>

            </ul>

            </div>
        {/*content 2 */}


            <div className="content2">


            <ul className="content2-img">
                 <li>
                 <Fade right>  <img src={pana2}/></Fade>  
                 </li>
             </ul>
             <ul className="content2-text">
        <Slide right>  <li className="content22-header">Welcome to <span style={{color:"#EE4248"}}> Dwidasa Samsara <br/>Indonesia (DSI)</span></li></Slide>
         <Zoom>  <li className="content22-text">Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to
                  innovate new creations by making the most of the ever-growing information technology through DSI’s distinct front-end
                   based application concept. <br/>

             Managed by a team of professional experts with extensive experience and impressive track records,
               DSI believes that continuous improvements and innovations assure your business to run 
          effectively and efficiently.</li> </Zoom>
             </ul>
             
            </div>


            {/*content3 */}

            <div className="content-3">
             <div className="content3-header">
                 <li><span>Product and Service</span></li>
             </div>


             <div className="content3-cards">
            <Zoom>  <div classname="card1">
                
              <div><img src={product}/></div>
              <div ><h1 style={{color:"#EE4248"}}>Our Product</h1></div>
              <h2 >Our product is made on the base of our<br/> team’s careful research and,analyses,<br/> ranging from internet based <br/> application.</h2>
              <div><Flip><button className="card1button">Read More</button></Flip></div>
            </div> </Zoom>
            <Fade>
            <div classname="card2">
              <li><img src={service}/></li>
              <li><h1 style={{color:"#EE4248"}}>Our Service</h1></li>
              <li><h2>DSI’s shared service solutions focus on <br/>the front-end based software <br/> development, designed specifically for <br/>the banking and financial sectors.</h2></li>
              <li><Flip><button className="card1button">Read More</button></Flip></li>
            </div> </Fade>
             
            <Fade right>
            <div classname="card3">
              <li><img src={tech}/></li>
              <li><h1 style={{color:"#EE4248"}}>Our Technology</h1></li>
              <li><h2>First JAVA, runs on more than 850 <br/>million personal computers worldwide,<br/> and on billions of devices worldwide,<br/> including mobile and TV devices.</h2></li>
              <li><Flip><button className="card1button">Read More</button></Flip></li>
            </div></Fade>
        </div>
             

            </div>





            
        </div>
    )
}

export default Content;
