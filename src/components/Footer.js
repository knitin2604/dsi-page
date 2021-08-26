import './Footer.css';

import React from 'react';
import foot1 from '../images/foot1.png';
import net from '../images/.net.png';
import android from '../images/android.png';
import berry from '../images/berry.png';
import light from '../images/light.png';
import ios from '../images/ios.png';
import java from '../images/java.png';
import Slide from 'react-reveal/Slide';



function Footer() {
    return (
        <div>
          <Slide left>  <div className="foot-cards">
               <ul className="foot1">
                  <li><img src={foot1}/></li>
                  <li>PT Dwidasa Samsara Indonesia</li>
                  <li>Ruko Jalur Sutera 29A No. 53<br/>
                   Alam Sutera Serpong, Tangerang 15323
                  </li>
               </ul>
                 
               <ul className="foot2">
                  <li><span style={{fontSize:"30px"}}>Contact</span></li>
                  <li style={{fontSize:"15px"}}>Phone : +62.21.5314.1135 ,<br/>
                   Fax : +62.21.5314.1135<br/>
                   Email : community@dwidasa.com</li>
                   </ul> 

                 <ul className="foot3">
                     <ul className="foot3-img1">
                         <li><img src={light}/></li>
                         <li><img src={net}/></li>
                         <li><img src={java}/></li>
                        
                     </ul>
                     <ul className="foot3img2">
                         <li><img src={ios}/></li>
                         <li><img src={android}/></li>
                         <li><img src={berry}/></li>
                         
                     </ul>

                    </ul>  


              </div></Slide>


             {/*base */}
             <div className="base">
                 <li className="text"><h2>Copyright © 2015 - Dwidasa Samsara Indonesia</h2></li>
             </div>
        </div>
    )
}

export default Footer
