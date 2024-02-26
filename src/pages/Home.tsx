import { useEffect, useState } from 'react';
import Filters from './../components/Filters';
import Card from './../components/Card';
import FilmCard from '../components/Cards/FilmCard';
import VehicleCard from '../components/Cards/VehicleCard';
import { makeRequest } from '../utils/utils';
import './../styles/home.css';

const Home = () => {
    const [data, setData] = useState<any[]>([]);
    const [search, setSearch] = useState<string>('');
    const [filter, setFilter] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    // Fetch the data from the API and store it in the data state
    const fetchData = async (category: string, pageNumber: number) => {
        // Simple check to bypass initial rendering
        if (!category) return;
        setStatus('Loading...');
        // Clear the data state to repopulate it with the new data
        setData([]);
        try {
            // Make the API call
            const res:any = await makeRequest(category, pageNumber);
            // Store the response data in tempData to gather all
            let tempData: any[] = [...res.results];
            // Set the number of pages (10 items per page)
            let pageCount = Math.ceil(res.count / 10);
            for (let i = 2; i <= pageCount; i++) {
                const pageData:any = await makeRequest(category, i);
                tempData = tempData.concat(pageData.results);
            }
            setData(tempData);
            setStatus('');
        } catch (error) {
            // If there's a error in the API call, set the status to error
            console.log(error);
            setStatus("Didn't find anything. Try again.");
            setData([]);
        }
    }

    console.log(filter);
    
    // Re render the data based on the search value
    useEffect(() => {
        fetchData(search, 1);
    }, [search]);

    return (
        <main>
            <h1>Welcome to my rendering of the star wars API</h1>
            <div className='display-box'>
                <Filters setSearch={setSearch} setFilter={setFilter} data={data} setData={setData} />
                <div className='card-box'>
                    {status!=='' ? <h1>{status}</h1> : null}
                    {
                        // Ensure the data is available before rendering the cards
                        data && data.map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    id={item.id}
                                    header={item.name || item.title}
                                    subheading={item.model || item.director}
                                    description={item.opening_crawl ?
                                        <FilmCard director={item.director} producer={item.producer} releaseDate={item.release_date} openingCrawl={item.opening_crawl} /> :
                                        <VehicleCard manufacturer={item.manufacturer} costInCredits={item.cost_in_credits} length={item.length} crew={item.crew} passengers={item.passengers} cargoCapacity={item.cargo_capacity} />}
                                />
                            )
                        })
                    }
                </div>
                {/* <Pagination currentPage={currentPage} numberOfPages={numberOfPages} setCurrentPage={setCurrentPage} /> */}
            </div>

        </main>
    )
}

export default Home
