import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Filter from "../form/filter";
import Pagination from '../buttons/pagination'
import Download  from '../buttons/downloadbtn'

class searchAll extends Component {
      constructor(props){
      super(props)
      this.state={
        currentPage: 1,
        postsPerPage: 3,
      }
    }
  render() {


const { localData, searchItem} = this.props;
const{ currentPage, postsPerPage} = this.state;
const news = localData.filter(val =>val.name.first.toLowerCase().includes(searchItem.toLowerCase()));
console.log(news);

 const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const nextPage = () => this.setState({ currentPage: currentPage + 1 });

    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

     // all user page
    const currentSearch = news.slice(indexOfFirstPost, indexOfLastPost);


    return (
       <div className="conts">
                           
                    <div className="fms">
                        <h3>All Users</h3>
                        <small>Filter by</small>
                        {/* forms */}
                        <Filter/>
           </div>
           {currentSearch.map((item)=>(
             
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
                             <Link to={`/users/${item.cell}`} >
                              <span className="flexspan"><i className="fa fa-arrow-right" aria-hidden="true" /></span>
                              </Link>
                          </div>
                </div>
             
           ))}
        
               <div className="downloads pt-3">
               <Download/>
          <Pagination postsPerPage={postsPerPage} totalPosts={news.length} currentPage={currentPage} nextPage={nextPage} prevPage={prevPage} />

           </div>
        

      </div>
    );
  }
}

export default searchAll;
