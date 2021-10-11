import React from 'react'
import { useEffect } from 'react'
import '../signUp/css/signup.css'


const Data = ()=>{

 
   
    React.useEffect(() => {
        
         
       
    
        // return () => {
        //   clearInterval(timer);
        // };
      }, []);
    
    return(
        <React.Fragment>
            
            <div className="signUp_wrapper container">
             
            <div className="form-box">
                <div className="bold-text " style={{color:'rgb(9, 9, 26)'}}>
                    Data Subscription 
                </div>
                <div className="airtimeText">

                </div>
                 <form>
                  
                     <div className="mb-3">
                        <label htmlFor="network" className="form-label">Network</label>
                        <select type="email" className="form-control" id="exampleInputEmail1">
                            <option value="">please select</option>
                            <option value="mtn">MTN</option>
                            <option value="glo">GLO</option>
                            <option value="Airtel">Airtel</option>
                            <option value="9mobile">9mobile</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="network" className="form-label">Data plan</label>
                        <select type="email" className="form-control" id="exampleInputEmail1">
                            <option value="">please select</option>
                            <option value="mtn">MTN</option>
                            <option value="glo">GLO</option>
                            <option value="Airtel">Airtel</option>
                            <option value="9mobile">9mobile</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone Number" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    

                  
                    
                    
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-success form-control">Proceed</button>
                </form>
            </div>
        </div >
        </React.Fragment>
    )
}

export default Data;