import React, { Component } from 'react';
import Filter from "../form/filter";
import { Link } from 'react-router-dom';


export class alluser extends Component {
    // constructor(props)
    // componentDidMount(){
    //     this.setState({
    //         all:this.props.all
    //     })
    // }
    
    render() {
console.log(this.props);

const {all , loading} = this.props

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
                        <h3>All Users</h3>
                        <small>Filter by</small>
                        {/* forms */}
                        <Filter/>
           </div>
                        
                         </div>
                {/* first user */}
                {all.map((item, i) => (

            
                <div className="row shallm" key={item.cell}>
                  <div className="col-md-4 col-lg-2 col-sm-4 py-3">
                            <img src={item.picture.thumbnail} className="wdth img-responsive rounded-circle" alt="" />
                          </div>
                          <div className="col-md-7 col-lg-8 col-sm-7 py-3">
                            <span className="fw-bold">{item.name.first + " " + item.name.last}</span><br />
                            <span className="fst-italic   ftsm">{item.location.street.number + " " + item.location.street.name + " " + item.location.city + " " + item.location.state}
                             </span><br />
                            <span className="ftsm"><small className="fw-light "><i className="fa fa-envelope-o" aria-hidden="true" />
                                &nbsp; {item.email}</small><small><i className="fa fa-volume-control-phone px-2" aria-hidden="true" />{item.cell}</small></span>
                          </div>
                          <div className="col-md-1 col-lg-2 col-sm-1">
                            <Link to={`/user/${item.cell}`}>
                              <span className="flexspan"><i className="fa fa-arrow-right" aria-hidden="true" /></span></Link>
                          </div>
                </div>
                ))}
                    {/*  donwnload  */}
            
              </div>
          
            )
        }

      
    }
}

export default alluser
