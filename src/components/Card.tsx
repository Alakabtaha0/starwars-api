import React from 'react'
import '../styles/card.css';
import { CardProps } from '../types/types';
import Starship from '../assets/Icon.png';


const Card: React.FC<CardProps> = ({ id, header, subheading, description }) => {

    return (
        <div key={id} className='card-container'>
            <div className='card-info'>
                <div className='sub-card-info'>
                    <h5>{header}</h5>
                    <p>{subheading}</p>
                </div>
                <div className='img-container'>
                    <img src={Starship} alt='Starship' />
                </div>
            </div>
            {/* Description is a react component */}
            {description}
        </div>
    )
}

export default Card
