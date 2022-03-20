import React from 'react'
import PortfolioNavigation from '../../components/portfolio-nav/PortfolioNavigation'
import styles from './portfoliopage.module.scss'

function PortfolioPage() {
  return (
    <div className={styles.portfolio}>
        <PortfolioNavigation />
    </div>
  )
}

export default PortfolioPage