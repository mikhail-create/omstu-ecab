import React from 'react'
import NewsCard from '../news-card/NewsCard'
import styles from './news.module.scss'

function News() {
    return (
        <div className={styles.news}>
            <div className={styles.news_title}>
                <h1>Новости</h1>
            </div>
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    )
}

export default News