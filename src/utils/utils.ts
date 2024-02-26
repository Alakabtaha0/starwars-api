/**
 * Sort the data alphabetically based on the filter
 * @param data The array of data to be sorted 
 * @param filter How to sort the data (ascending or descending)
 * @param key Are you sorting by name or title
 * @returns The sorted data in an array
 */
export const sortedData = (data: any[], filter: string, key: 'name' | 'title') => {
    // Sort the data alphabetically based on data.name or data.title
    if (filter === 'ascending') {
        return data.sort((a, b) => a[key] > b[key] ? 1 : -1);
    }
    return data.sort((a, b) => a[key] < b[key] ? 1 : -1);
}

/**
 * Make a request to the star wars API
 * @param category What category to make the API call to (starships, films, vehicles etc.)
 * @param pageNumber What page number to make the API call to
 * @returns returns a promise object with the data
 */
export const makeRequest = async (category: string, pageNumber:number) => {
    const response = await fetch(`https://swapi.dev/api/${category}/?page=${pageNumber}`);
    const res = await response.json();
    return res;
}