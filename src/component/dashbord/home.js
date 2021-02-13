import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../form/search.js'


export default function home() {
    return (
        <div>
         
      {/* first column */}
     
        <div className="flx">
          <h4 className="fw-light">Hello, <b>Emerald</b></h4>
          <p>
            Welcome to your dashboard, kindly sort through the user base
          </p>
          {/* search */}
          <Search/>
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
        </div>
   
      {/* first column ends */}
     


        </div>
    )
}
