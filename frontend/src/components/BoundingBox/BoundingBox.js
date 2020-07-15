import React from 'react';
import './BoundingBox.css';


const BoundingBox  = ({ square }) => {
    return (
         <div className='bounding-box' style={{top: square.topRow, right:square.rightCol, bottom: square.bottomRow, left: square.leftCol }}></div> 
    )
} 

export default BoundingBox;
