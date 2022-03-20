import React from 'react'
import styles from './portfolionav.module.scss'

function PortfolioNavigation() {
  return (
    <div className={styles.navigation}>
        <div className={styles.navigation_stage}>
            Общая информация
        </div>
        <div className={styles.navigation_stage}>
            Образование
        </div>
        <div className={styles.navigation_stage}>
            Учебная деятельность
        </div>
        <div className={styles.navigation_stage}>
            Научная работа
        </div>
    </div>
  )
}

export default PortfolioNavigation