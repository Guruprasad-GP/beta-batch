import React from 'react'

class MyButton extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count:0
            }
    }
    render(){
        return (
            <div>
                <button onClick={()=>{
                    this.setState({count : this.state.count+1})
                     console.log('count')
                    }}
                > 
                Click me
                </button>
                <br/><br/>
                <div>
                    Number of Clicks : {this.state.count}
                 </div>    
            </div>

        )
    }
}
export default MyButton