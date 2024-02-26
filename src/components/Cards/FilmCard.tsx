import React from 'react'
import { FilmProps } from '../../types/types'


const FilmCard: React.FC<FilmProps> = ({ director, producer, releaseDate, openingCrawl}) => {
    return (
        <div className='data-info'>
            <div className='data-info-list ai-settings'>
                <ul>
                    <li>Director</li>
                    <li>Producer</li>
                    <li>Release Date</li>
                    <li>Opening Crawl</li>
                </ul>
            </div>
            <div className='seperating-line'></div>
            <div className='data-info-list bi-settings'>
                <ul>
                    <li>{director}</li>
                    <li>{producer}</li>
                    <li>{releaseDate}</li>
                    <li>{openingCrawl}</li>
                </ul>
            </div>
        </div>
    )
}

export default FilmCard
