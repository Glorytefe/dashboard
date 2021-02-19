
import { Link } from 'react-router-dom';
import React from 'react'

export default function home() {
  return (
    <div>
           
          <div className="cord">
            <p className="pt-5 pb-4">Show Users</p>
            

            {/* button tabs for users */}
            <div className="flxn">
              <div>
                <Link to="/">
                <button className="use">
                    <i className="fa fa-users fa-2x" aria-hidden="true" />
                  </button>
                </Link>
                <p>All Users</p>
              </div>
              <div>
              <Link to="/maleuser">
                  <button className="mal">
                    <i className="fa fa-male fa-2x" aria-hidden="true" />
                  </button>
                  </Link>
                <p>Male Users</p>
              </div>
              <div>
              <Link to="/femaleuser">
              <button className="fem">
                    <i className="fa fa-female fa-2x" aria-hidden="true" />
                  </button>
              </Link>
               
                <p>Female Users</p>
              </div>
            </div>
          </div>
      
   
      {/* first column ends */}
     


        </div>
        
   
    
  )
}






