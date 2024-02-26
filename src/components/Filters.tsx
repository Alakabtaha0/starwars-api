import React from 'react';
import { FiltersProps } from '../types/types';
import { sortedData } from '../utils/utils';
import '../styles/filters.css';


const Filters: React.FC<FiltersProps> = ({ setSearch, setFilter, data, setData }) => {

    // Filter the data based on the user selection of ascending or descending then send to API
    const filterData = () => {
        // Check to see if data is available
        if (data.length <= 1) return;
        const filterValue = document.querySelector('select');
        let selectValue:string = '';
        if (filterValue instanceof HTMLSelectElement) {
            selectValue = filterValue.value;
        }
        if (selectValue === 'ascending' || selectValue === 'descending') setFilter(selectValue);
        // If successful, set the data to the sorted data
        setData(sortedData(data, selectValue, data[0].name ? 'name' : 'title'));
    }

    // Set the search value to send to the API
    const handleSearch = () => {
        const search = document.querySelector('.search-box') as HTMLInputElement;
        const filter = document.querySelector('.filter-dropdown') as HTMLSelectElement;
        filter.value = '';
        setFilter('');
        setSearch(search.value);
    }

    return (
        <div className='filters-bounding-box'>
            <input className='search-box' type='text' placeholder='Enter Starships, Films, or Vehicles...' />
            <button className='filter-button' onClick={handleSearch}>Search</button>
            <select className='filter-dropdown' >
                <option value=''>-- Select --</option>
                <option value='ascending'>Ascending</option>
                <option value='descending'>Descending</option>
            </select>
            <button className='filter-button' onClick={filterData}>Apply</button>
        </div>
    )
}

export default Filters
