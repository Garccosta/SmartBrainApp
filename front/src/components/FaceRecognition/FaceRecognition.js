import React from 'react';
import BoundingBox from '../BoundingBox/BoundingBox';

const FaceRecognition  = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt= '' src={ imageUrl } width='500px' height ='auto'/>

                {
                box.map((square,i) => {
                    return( <BoundingBox key={i} square={square}/> )
                })
                }
            </div>
        </div>
    )
} 

export default FaceRecognition;
