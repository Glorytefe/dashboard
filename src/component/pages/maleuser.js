import React, { Component } from 'react';
import Filter from "../form/filter"




export class maleuser extends Component {
    render() {
        const {male , loading} = this.props;

                if(!loading){
                   return  <div className="text-center">
                   Loading....
               </div>
                }
                else{
                    return (
                        <div className="">
                         <div className="conts">
                         <div className="fms">
                        <h3>Male Users</h3>
                        <small>Filter by</small>
                        {/* forms */}
                        <Filter/>
                             </div>
                  
                         </div>
                        {/* first user */}
                        {male.map((item, i) => (
        
                       
                        <div className="row shallm" key={i}>
                          <div className="col-md-4 col-lg-2 col-sm-4 py-3">
                            <img src={item.picture.thumbnail} className="wdth rounded-circle img-responsive" alt="" />
                          </div>
                          <div className="col-md-7 col-lg-8 col-sm-7 py-3">
                            <span className="fw-bold">{item.name.first + " " + item.name.last}</span><br />
                            <span className="fst-italic   ftsm">{item.location.street.number + " " + item.location.street.name + " " + item.location.city + " " + item.location.state}
                             </span><br />
                            <span className="ftsm">
                            <small className="fw-light "><i className="fa fa-envelope-o" aria-hidden="true" />
                                &nbsp; {item.email}</small>
                                <small><i className="fa fa-volume-control-phone px-2" aria-hidden="true" />{item.cell}</small></span>
                          </div>
                          <div className="col-md-1 col-lg-2 col-sm-1">
                            <a href="/pages/userlist.html">
                              <span className="flexspan"><i className="fa fa-arrow-right" aria-hidden="true" /></span></a>
                          </div>
                        </div>
                        ))}
                            {/*  donwnload  */}
                     
                      </div>
                  
                    )
                }
        
              
            }
}

export default maleuser
