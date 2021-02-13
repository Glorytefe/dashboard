import React, { Component } from 'react';


export class search extends Component {
    constructor(){
        super()
    this.state ={
        value: '',
    }
    }

//     handleSearch = (e) => {
// e.target.preventDefault();
// this.setState({
//     value: []
// })
// console.log(e);
    // }

    render() {
      
        return (
            <div className="searchs">
            <form >
              <input type="text" placeholder="      Find a user" style={{fontFamily: 'Arial, FontAwesome'}} />
            </form>
          </div>
         
        )
    }
}

export default search
