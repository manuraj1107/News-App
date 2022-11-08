import React from 'react'

const NewsArticle = ({data}) => {
  return (
    <div className='news'>
        <h1 className='news__title'>{data.title}</h1>
        <p className='news__desc'>{data.description}</p>
        <span className='news__author'>{data.author}</span>
        <br />
        <span className='news__published news__info'>{data.publishedAt}</span>
        <span className='news__source news__info'>{data.source.name}</span>
    </div>
  )
}

export default NewsArticle;