import React, { Component } from 'react'

class Square extends Component{
  render(){
    return(
      <React.Fragment>
        {/* the div sets the size of each square and the onclick call the handleChange. The syntax on the onClick is needed because the method is taking in an argument (which is the click) */}
        <div id="square" onClick= {() => this.props.handleChange(this.props.index) }>
          <p>{ this.props.value }</p>
        </div>
      </React.Fragment>
    )
  }
}
export default Square
