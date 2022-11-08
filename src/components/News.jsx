import React, {useContext} from 'react'
import { NewsContext } from '../NewsContext'
import NewsArticle from './NewsArticle';

const News = (props) => {
    const {data} = useContext(NewsContext)
  return (
    <div>
    <h1 className='head_title'>News App 📰</h1>
    <div className='all__news'>
       {data ? data.articles.map(news => <NewsArticle data={news} key={news.url} />) : "Loading..."}
    </div>
    </div>
  )
}

export default News