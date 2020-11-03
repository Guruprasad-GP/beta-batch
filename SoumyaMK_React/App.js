import React from 'react'
import Button from './Button'

class App extends React.Component{
  constructor(props) {
    super(props)
      this.state = {liked: false}
  }
    
  render(){
    return (
      <div style= {{padding: 50}}>
        <Button/>
      </div>
    )
  }
}

export default App