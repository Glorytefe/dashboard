import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class prevDisabled extends Component {
    render() {
        const {nextPage} = this.props; 

        return (
            <div className="naviga">
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
        )
    }
}

export default prevDisabled
