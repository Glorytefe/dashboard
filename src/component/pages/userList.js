import React, { Component } from 'react';
import Filter from "../form/filter";
import '../../userlist.css';



class userList extends Component {
  constructor(props){
   super(props);
   this.goBack = this.goBack.bind(this);
}

goBack(){
    this.props.history.goBack();
}

  render() {
     const { match, users} = this.props;
     const id = match.params.userlist;
     const a = users[0];
     const b = users[1];
     const c = users[2];

     const list = [...a, ...b, ...c]

   
  return (
    
      <div> 
         <div className="fms conts">
            <h3>User List</h3>
            <small>Filter by</small>
            {/* forms */}
            <Filter/>
             <div className="pt-4">
                  <div onClick={this.goBack} className="results"
                    ><i className="fa fa-long-arrow-left" aria-hidden="true"></i
                    >RESULTS
                  </div>
                 
                </div>
                </div>

        {list.filter(person => person.cell === id).map((user)=>(
            <div className="row" key={id} >
            <div className="col-md-4 col-lg-4 col-sm-12 py-3">
              <img src={user.picture.thumbnail} className="wdth img-responsive rounded-circle" alt="" />
            </div>
            <div className="col-md-8 col-lg-8 col-sm-12 py-3 con">
              <div>
                <span className="fw-bold">{user.name.first + " " + user.name.last}</span>
                <span className="fw-light pr-1">&nbsp;{user.dob.age}</span>
              </div>
              <div className="ftsm pt-2">
                <p className="fw-light">
                  <i> {user.location.street.number + " " + user.location.street.name + " " + user.location.city + " " + user.location.state}</i>
                </p>
                <div className="spc">
                  <span className="jnda1 ">
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

export default userList;
