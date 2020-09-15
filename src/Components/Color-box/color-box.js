import React from 'react';

import './style.css'

const ColorBox = (props) =>  {

    return(

        <div className='color-box'>
            <h2>Choose Color</h2>
            <input type='color' 
            onChange={props.onChange}/>
            <p>{props.selectedColor} </p>
        </div>

    );
};

export default ColorBox