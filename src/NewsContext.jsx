import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
     const apikey = "06ecf24879b0423687b548bd9fcb3092";

    useEffect(() => {
        axios.get(
            `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apikey}`
        ).then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, [data]);

    return (
        <NewsContext.Provider value={{data}}>
         {props.children}
        </NewsContext.Provider>
    )
}



