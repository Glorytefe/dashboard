import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React, { Component } from 'react'
import Home from './component/dashbord/home.js';
// import Filter from './component/form/filter.js';
import Alluser from './component/pages/alluser'
import Axios from 'axios'
import Femaleuser from "./component/pages/femaleuser";
import Maleuser from "./component/pages/maleuser";
import Pagination from "./component/buttons/pagination";
import Download from "./component/buttons/downloadbtn"
import Userlist from './component/pages/userList.js';








export class App extends Component {
  constructor(props){
    super(props)
    this.state ={
        all: [],
        male:[],
        female:[],
        loading:false,
        currentPage: 1,
        postsPerPage: 3
        
    }
}

fetchAll(){
  Axios.get('https://randomuser.me/api/?page=3&results=100&seed=abc')
  .then(res => {
    const items= res.data.results;
    this.setState({
      all:  items,
      loading:true,
  })
  }) 
}

fetchMales(){
  Axios.get('https://randomuser.me/api/?results=100&gender=male')
  .then(res => {
    const males= res.data.results;
    this.setState({
      male:  males,
      loading:true,
  })
  }) 
}

fetchFemales(){
  Axios.get('https://randomuser.me/api/?results=100&gender=female')
  .then(res => {
    const females= res.data.results;
    this.setState({
      female:  females,
      loading:true,
  })
  }) 
}

componentDidMount(){
  this.fetchAll();
  this.fetchMales();
  this.fetchFemales()
  this.pagination()
    
}
pagination(){

 
}

  render() {
    const {all, female, male, loading, currentPage, postsPerPage} = this.state;
    

  // pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

                // all user page
                const currentPostAll = all.slice(indexOfFirstPost, indexOfLastPost);

                // femaleuser page
                    const currentPostFemale = female.slice(indexOfFirstPost, indexOfLastPost);

                // maleuser page
                const currentPostMale = male.slice(indexOfFirstPost, indexOfLastPost);



    const nextPage = () => this.setState({ currentPage: currentPage + 1 });

    const prevPage = () => this.setState({ currentPage: currentPage - 1 });


    return (
      <BrowserRouter>
      <div className="canvas">
         <div className=" pt-5">
     
           <div className="row conta" >
     
                 {/* first col */}
                 <div className="col-lg-6 col-md-12 col-sm-12 text-white">
                 <Home/>
               
                 </div>
                 {/* first col ends */}
     
                 {/* second col */}
                 <div className="col-lg-6 col-md-12 col-sm-12 d-md-block cont">
                        
                         {/* contents starts*/}
                         <div className="conten pb-3">
                           <Switch>
                           <Route exact path="/" render = { (props) => <Alluser {...props} all={currentPostAll} loading={loading}/>} />  
                           <Route  path="/femaleuser" render = { (props) => <Femaleuser {...props} female={currentPostFemale} loading={loading}/>} />  
                           <Route  path="/maleuser" render = { (props) => <Maleuser {...props} male={currentPostMale} loading={loading}/>} />  
                           <Route  path="/user/:userlist" component={Userlist}/>  
                             

                           </Switch>
                         {/* contents ends*/}
                         <div className="downloads pt-3">
                          <Download/>

                          <Pagination postsPerPage={postsPerPage} totalPosts={all.length} currentPage={currentPage} nextPage={nextPage} prevPage={prevPage} />
                          </div>
                     </div>
                     </div>
                     {/* second col  ends*/}
                    
                    
     
                 </div>
             </div>
         </div>
         </BrowserRouter>
        
       
    )
  }
}

export default App

