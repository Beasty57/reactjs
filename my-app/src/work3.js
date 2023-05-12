import CardWork from "./card work 4567";
import CardWork2 from "./card work 891011";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Creat from "./crud/creat";

export default function Work3(){
    return (
        
        <div className="pt-3 ">
                  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                  <script>{AOS.init()}</script>

               <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
                  <div className="fs-1 bolder w-100   p-1 mb-2 bg-primary text-white  text-center">REACT</div>
               </div>
            
            <CardWork></CardWork>
            <CardWork2></CardWork2>
            <Creat></Creat>
        </div>
    )   
}
