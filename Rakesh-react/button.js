import React from 'react'

class Abc extends React.Component{
    constructor(props) {
        super(props)
        this.state = {count:0 }
    }
    render(){
        return (
            <div>
                <button onClick={()=>{
                    this.setState({count : this.state.count+1})
                    }}

                > click me
                </button>
                <br/><br/>
                <div> no of click : {this.state.count}</div>    
            </div>)
    }
}
export default Abc