import React from 'react'
import NewsCard from '../../components/news-card/NewsCard'
import styles from './newspage.module.scss'

function NewsPage() {
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

export default NewsPage