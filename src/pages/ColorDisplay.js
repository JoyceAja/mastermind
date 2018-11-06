import React from 'react';

let colors = ["red", "blue", "purple", "orange", "green", "yellow"]
//It is actually going to be displayed as a color image

export default () => (
    <div>
        <ul>
            {colors.map(color => <il style={{backgroundColor:`${color}`}}>{color}</il>)}
        </ul>
    </div>
)