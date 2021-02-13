import React, { Component } from 'react'

export class filter extends Component {
    render() {
        return (
         

             <div className="pt-3"> 
              <form >
                <input type="text" placeholder="      Find a user" style={{fontFamily: 'Arial, FontAwesome', height: 40}} />
                <select style={{height: 40}}>
                  <option value={1}>Country</option>
                  <option value={2}>Nigeria</option>
                </select>
                <span className="form-check form-switch tggle">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Show Country</label>
                </span>
              </form>
            </div>
         
        )
    }
}

export default filter
