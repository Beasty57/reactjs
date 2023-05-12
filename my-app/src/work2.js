import Work3 from "./work3";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Work2(){
 


  
    return (
        <div className="float-right row ">

            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            <script>{AOS.init()}</script>

           <div data-aos="fade-left"  data-aos-duration="3000">
                <div className="p-3">

                     <div className="col-sm-12">
                         <button type="button" class="btn btn-primary btn-lg w-5  float-end"> 
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                               <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                             </svg>
                         </button>
                     </div>

                     <div className="col-sm-12">
                          <button type="button" class="btn btn-primary btn-lg w-5  float-end"> 
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-back" viewBox="0 0 16 16">
                                  <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
                               </svg>
                          </button>
                     </div>

                </div>
           </div>
            
            <Work3></Work3>
        </div>
        
    )   

}
