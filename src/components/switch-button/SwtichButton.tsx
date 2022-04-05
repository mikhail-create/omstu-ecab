import React from 'react'
import styles from './switch-button.module.scss'

interface SwtichButtonProps {
    current: string
    name: string
    title: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function SwtichButton(props: SwtichButtonProps) {
    return (
        <div className={`${styles.switch} ${props.current === props.name && styles.active}`}>
            <label>
                <input
                    type="radio"
                    name={props.name}
                    value={props.name}
                    checked={props.current === props.name}
                    onChange={props.onChange}
                />
                {props.title}
            </label>
        </div>
    )
}

export default SwtichButton