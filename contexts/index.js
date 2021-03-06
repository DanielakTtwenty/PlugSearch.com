import React, { createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';


export const ResultContextProvider = ({children}) => {

    const[results, setResults] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const[searchTerm, setSearchTerm] = useState('');

    //link / type (e.g / videos, /search, /images
    const getResults = async (type)=>{
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`,{
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': 'a0b816bf34mshc780823107b935dp1e9beejsn83173a1335ee'
              }
        });

        const data = await response.json();

        setResults(data);
        setIsLoading(false);
    }

    return(
        <ResultContext.Provider value = {{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext); 
