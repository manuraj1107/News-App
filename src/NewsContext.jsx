import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    //const apikey = "b83c0ce9b411477c868f5cc6eebb8123";
     const apikey = "d3a68d3a93a54948a016a1553bc4d20c";

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



