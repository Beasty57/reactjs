
export default function Form(){
 


    // console.log(`name`);
    return (
        <div>
            <div>
                <div className="logsign  text-center position-relative d-flex ">
                    <div>
                        <div><h1 className="head position-absolute">Login Form</h1></div>
                    
                        <div className="log  position-absolute  text-white"><button type="button" class="btn but1  btn-lg">Login</button></div>
                        <div className="sign   position-absolute   text-white"><button type="button" class="btn but2 btn-lg">Signin</button></div>
                        </div>

                   <div className="">
                   <div className="form position-absolute accordion-flush row">
                    <div className="form1 "> <input class="form-control input-lg col-xs-1" placeholder="EMAIL"></input> </div>
                    <div className="form1 "> <input class="form-control input-xl col-xs-1" placeholder="PASSWORD"></input> </div>
                    <div className="position-absolute forg "><a >Forget password</a></div>
                     <div className="but position-absolute   "><button className="btn3 " size="lg"> Login</button></div>

                     <div  className="last d-flex position-absolute">
                        <div className=""> Not a member?</div>
                        <div className="l c"> <a><p className="signup">Sign up now</p></a></div>
                     </div>
                     
                   </div>
                    
                    </div>
                   
                </div>
                
            </div>  
        </div>
        
    )   

}
{/* <div className="text-center justify-content-around"> 

<div className="aaa">
<div className="www  text-center position-relative d-flex justify-content">
     <div className="log  position-absolute bg-primary text-white"> <p><b>Sign Up</b></p></div>
     <div className="sign11  position-absolute  bg-dark text-white"><p><b> Log In</b></p></div>
   </div>

 <div className="qqq text-center position-absolute">
    <div> <input placeholder="EMAIL"></input> </div>
    <div> <input placeholder="POSSWORD"></input> </div>
    <a>Forget possword</a>
    <div><button className=" btn btn-primary" size="lg"> Small button</button></div>
 </div>
</div>
</div> */}



