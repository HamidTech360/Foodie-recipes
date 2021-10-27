import * as React from 'react';
import { ExpandMore } from '@material-ui/icons';

import './css/papers.css'



const  Elevation = () =>{
  return (
          <div className="papers row">
          
             <div className="paper-wrapper col-3  col-lg-2 col-md-2 col-sm-4 col-xs-4">
          
                   <span className="paper-text">World</span>
                  <span className="more"><ExpandMore style={{color:'lightgrey'}}/></span> 
             
             </div>
             <div className="paper-wrapper col-3 col-lg-2 col-md-2 col-sm-4 col-xs-4">
          
                   <span className="paper-text">Following</span>
                  <span className="more"><ExpandMore style={{color:'lightgrey'}}/></span> 
             
             </div>
             <div className="paper-wrapper col-3 col-lg-2 col-md-2 col-sm-4 col-xs-4">
          
                   <span className="paper-text">Popular</span>
                  <span className="more"><ExpandMore style={{color:'lightgrey'}}/></span> 
             
             </div>
             <div className="paper-wrapper col-3 col-lg-2 col-md-2 col-sm-4 col-xs-4">
          
                   <span className="paper-text">Post</span>
                  <span className="more"><ExpandMore style={{color:'lightgrey'}}/></span> 
             
             </div>
            
             <div className="paper-wrapper col-3 col-lg-2 col-md-2 col-sm-4 col-xs-4">
          
                   <span className="paper-text">Location</span>
                  <span className="more"><ExpandMore style={{color:'lightgrey'}}/></span> 
             
             </div>
            
          </div>
          
         
  );
}
export default Elevation