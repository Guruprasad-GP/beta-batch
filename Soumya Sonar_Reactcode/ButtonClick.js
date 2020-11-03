import React from 'react'
class ButtonClick extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            random:0
            }
    }
  handleClick = () => {
    this.setState({random: Math.round(Math.random() * 100)});
  };

  render() {
    return (
      <center><div>
        <button onClick={this.handleClick}>Click Me</button><br/><br/>
        <div><h2>Random Numbers<br/><br/>{this.state.random}</h2></div>
      </div></center>
    );
  }
}
export default ButtonClick