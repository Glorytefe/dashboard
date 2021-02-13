import React, { Component } from 'react';
import Filter from "../form/filter";
import Axios from 'axios'

// import '../../userlist.css'


export class userList extends Component {
   constructor(){
       super()
       this.state={
        user:[]
       }
   }
    componentDidMount(){
        // const key =
        const { match: { params } } = this.props;
        Axios.get(`https://randomuser.me/api/?results=${params.userlist}")`)
        .then((data) => {
            const user = data.data.results
            // console.log('user', user);
      
            this.setState( {user});
          });
    }
    render() {
        const {user} = this.state
        // const{item} = user.results
        console.log(this.props);
       
        // console.log(user.gender);
        // console.log(this.state);

        // const {params, location} = this.props
        // let {userList }= location.key
        return (
          <div className="">
                <div className="fms conts">
            <h3>User List</h3>
            <small>Filter by</small>
            {/* forms */}
            <Filter/>
                </div>
            
        {user.map((user)=>(

        
            <div className="row" >
            <div className="col-md-4 col-lg-4 col-sm-12 py-3">
              <img src={user.picture.thumbnail} className="wdth img-responsive rounded-circle" alt="" />
            </div>
            <div className="col-md-8 col-lg-8 col-sm-12 py-3 con">
              <div>
                <span className="fw-bold">{user.name.first + " " + user.name.last}</span>
                <span className="fw-light">{user.dob.age}</span>
              </div>
              <div className="ftsm pt-2">
                <p className="fw-light">
                  <i> {user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state}</i>
                </p>
                <div className="spc">
                  <span className="jnda1 fw-light">
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                    &nbsp; {user.email}
                  </span>
                </div>
                <div className="spc">
                  <span className="jnd">{user.registered.date}</span>
                </div>
                <div className="py-2 px-2">
                  <p className="fw-light">
                    <i className="fa fa-volume-control-phone" aria-hidden="true" />{user.cell}
                  </p>
                 
                </div>
              </div>
            </div>
          </div> 
          ))}
          </div>
        )
    }
}

export default userList
