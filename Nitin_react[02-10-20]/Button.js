import React from 'react'

class ClickOn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count:0}
  }
  
  render() {
    return (
      <div>
        <button onClick={() =>
        {
          this.setState({count:this.state.count+1})
        }} style={{backgroundColor:'lightgreen', padding:'10px', color:'red'}}>Click</button>

        <div>
          number of count : {this.state.count}
        </div>
      </div>
    )
  }
}

export default ClickOn;
