import React from 'react'

import ColorBox from '../Color-box/color-box.js'

import './style.css'

class Background extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            selectedColor: '#ffffff'
        }
    }

    changeBackgroundColor = (event) => {

        this.setState({
            selectedColor: event.target.value
        })

    };

    // override 
    render = () => {
        return(

            <div style={{
                backgroundColor: this.state.selectedColor
            }} className='back-container'>
            
            <ColorBox 
                onChange={this.changeBackgroundColor}
                selectedColor={this.state.selectedColor}
            />


            </div>
        )
    }

} 

export default Background