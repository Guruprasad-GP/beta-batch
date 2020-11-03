import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleUp = () => {
        this.setState(function(prevState){
            return{
                count : prevState.count + 1
            }
        })
    }

    render(){
        return (
            <div>
                <button onClick= {this.handleUp}> Counter </button>
                <div>
                    <h2> Number of Clicks : {this.state.count} </h2> 
                </div>    
            </div>
        )
    }
}
export default Button