import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import prevDisabled from './prevDisabled.js'

export class pagination extends Component {
    render() {
        const { postsPerPage, totalPosts, nextPage, prevPage, currentPage } = this.props;
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
        }
       
        if (currentPage <= 1){
            return  <div className="naviga">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item" disabled>
                 
                <Link className="page-link" to="#"  aria-label="Previous">
                    <span aria-hidden="true">‹</span>
                  </Link>
                
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#" onClick={() => nextPage()} aria-label="Next">
                    <span aria-hidden="true">›</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        }
        if (currentPage >= pageNumbers.length){
            return <div className="naviga navss">
                    <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                        
                        <Link className="page-link" to="#"  onClick={() => prevPage()}  aria-label="Previous">
                            <span aria-hidden="true">‹</span>
                        </Link>
                        
                        </li>
                        <li className="page-item" disabled>
                        <Link className="page-link" to="#"  aria-label="Next">
                            <span aria-hidden="true">›</span>
                        </Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            }
       else{
        return (
            <div className="naviga">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <Link className="page-link" to="#" onClick={() => prevPage()} aria-label="Previous">
                    <span aria-hidden="true">‹</span>
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#" onClick={() => nextPage()} aria-label="Next">
                    <span aria-hidden="true">›</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )
       }
    }
}

export default pagination
