import React from 'react'
import styles from './headerbutton.module.scss'

interface HeaderButtonProps {
    title: string
}


function HeaderButton(props: HeaderButtonProps) {
    return (
        <div className={styles.button}>
            {props.title}
        </div>
    )
}

export default HeaderButton