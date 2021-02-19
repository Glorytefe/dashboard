import React, { Component } from 'react'

export class filter extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //           searchItem: '' ,
  //   }
  // }
    render() {
//       const setSearch = (e) =>{
// const searchs = e.target.value;
// this.setState({
//   searchItem: searchs,
// })
// }
      const { setSearch, searchItem } = this.props;
      // const sear = e
      console.log(this.state);
        return ( 
             <div className="pt-3"> 
              <form >
                <input value={searchItem} onChange={(e)=>setSearch(e)} type="text" placeholder="      Find a user" style={{fontFamily: 'Arial, FontAwesome', height: 40}}  />
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
