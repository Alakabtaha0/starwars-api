export interface CardProps {
    id: number;
    header: string;
    subheading: string;
    description: React.ReactNode;
}

export interface VehicleProps {
    manufacturer: string;
    costInCredits: string;
    length: string;
    crew: string;
    passengers: string;
    cargoCapacity: string;
}

export interface FilmProps {
    director: string;
    producer: string;
    releaseDate: string;
    openingCrawl: string;
}

export interface FiltersProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    data: any[];
    setData: React.Dispatch<React.SetStateAction<any[]>>;
    //setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface PaginationProps {
    numberOfPages: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}