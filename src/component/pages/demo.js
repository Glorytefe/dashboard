import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React, { Component } from 'react'
import Home from '../dashbord/home';
// import Filter from './component/form/filter.js';
import Alluser from '../pages/alluser'
import Axios from 'axios'
import Femaleuser from "../pages/femaleuser";
import Maleuser from "../pages/maleuser";
import Pagination from "../buttons/pagination";
import Download from "../buttons/downloadbtn"
import Userlist from '../pages/userList.js';
import {results} from '../localData.json';








export class demo extends Component {
  constructor(props){
    super(props)
    this.state ={
        all: [],
        male:[],
        female:[],
        loading:false,
        currentPage: 1,
        postsPerPage: 3,
        localData: [],

        searchItem: '',
    }
}

// all user
fetchAll(){
  Axios.get('https://randomuser.me/api/?results=100&seed=abc')
  .then(res => {
  const items= res.data.results;
    this.setState({
      all:  items,
      loading:true,
  })
  }) 
}

// male user
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

// female user
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

// local search

fetchData(){
const data = results
// const i = 0
// for(let i=0; i <results.length; i++){
// const hh = () =>newdata.push[i]
// }
this.setState({
localData : data
})

}





componentDidMount(){
  this.fetchAll();
  this.fetchMales();
  this.fetchFemales();
  // this.pagination();
  this.fetchData();
  
    
}
// pagination(){

 
// }



  render() {
const setSearch = (e) =>{
const searchs = e.target.value;
this.setState({
  searchItem: searchs,
})
console.log(searchs);
}
    const {all, female, male, loading, currentPage, postsPerPage, localData, searchItem } = this.state;
    console.log(this.state);

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

    const userList = []
    userList.push(currentPostAll, currentPostFemale, currentPostMale);


const renderAll = () =>{
if(searchItem === ''){
  return (
    <div>
     
     
              
         {/* contents starts*/}
                <div className="conten pb-3">
                <Switch>
                <Route exact path="/" render = { (props) => <Alluser {...props} all={currentPostAll} loading={loading}/>} />  
                <Route  exact path="/femaleuser" render = { (props) => <Femaleuser {...props} female={currentPostFemale} loading={loading} />} />  
                <Route  exact path="/maleuser" render = { (props) => <Maleuser {...props} male={currentPostMale} loading={loading}/>} />  
                           {/* <Route  path="/user/:userlist"  component={Userlist}/>   */}
                       <Route exact path="/users/:userlist" render = {(props) => <Userlist{...props} user={currentPostMale} users={userList} /> } />
                             

                           </Switch>
                         {/* contents ends*/}
                         <div className="downloads pt-3">
                          <Download/>

                          <Pagination postsPerPage={postsPerPage} totalPosts={all.length} currentPage={currentPage} nextPage={nextPage} prevPage={prevPage} />
                          </div>
                     </div>
                     
                     {/* second col  ends*/}
                    
                    
     
                 </div>
           
       
         
      
  )
} else if(!searchItem === '') {
  return (
        
     
         <div>
           <h1>Not empty</h1>
         </div>
         
      
  )
}
}

 return  (
   <div className="canvas">
    <div className="row conta">
       <BrowserRouter>
       {/* first starts */}

    <div className="col-lg-6 col-md-12 col-sm-12 text-white">
         
           <div className="flx">
          <h4 className="fw-light">Hello, <b>Emerald</b></h4>
          <p>
            Welcome to your dashboard, kindly sort through the user base
          </p>
            <div className="searchs">
            <form >
              <input value={searchItem} onChange={(e)=>setSearch(e)} type="text" placeholder="      Find a user" style={{fontFamily: 'Arial, FontAwesome'}} />
            </form>
          </div>
         

           <Home />
          </div>
                
               </div>
          
        
       {/* first ends */}
               <div className="col-lg-6 col-md-12 col-sm-12 cont">
      {renderAll()} 

               </div>

     </BrowserRouter>
    </div>
      </div>
   )
       
    
}
 
}

export default demo

