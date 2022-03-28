import React from 'react'
import styles from './successbutton.module.scss'

export interface SuccessButtonProps {
    title: string
}

function SuccessButton(props: SuccessButtonProps) {
  return (
    <div className={styles.success}>
        {props.title}
    </div>
  )
}

export default SuccessButton