import Work2 from "./work2";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Work1(){
 


  
    return (
        <div className=" container">
                    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                    <script> {AOS.init()} </script>
            <div>
                <div data-aos="fade-right" data-aos-offset="300"  data-aos-easing="ease-in-sine" data-aos-duration="3000">
                <div className="retroshd row position-absolute p-3  fs-1 bolder">Boopathy</div>
                </div>
               <Work2></Work2>
            </div>
        </div>
        
    )   

}
