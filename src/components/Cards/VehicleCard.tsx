import React from 'react'
import { VehicleProps } from '../../types/types'


const VehicleCard: React.FC<VehicleProps> = ({ manufacturer, costInCredits, length, crew, passengers, cargoCapacity }) => {
    return (
        <div className='data-info'>
            <div className='data-info-list ai-settings'>
                <ul>
                    <li>Manufacturer</li>
                    <li>Cost In Credits</li>
                    <li>Length</li>
                    <li>Crew</li>
                    <li>Passengers</li>
                    <li>Cargo Capacity</li>
                </ul>
            </div>
            <div className='seperating-line'></div>
            <div className='data-info-list bi-settings'>
                <ul>
                    <li>{manufacturer}</li>
                    <li>{costInCredits}</li>
                    <li>{length}</li>
                    <li>{crew}</li>
                    <li>{passengers}</li>
                    <li>{cargoCapacity}</li>
                </ul>
            </div>
        </div>
    )
}

export default VehicleCard
