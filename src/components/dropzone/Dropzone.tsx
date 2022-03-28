import React, { useState } from 'react'
import styles from './dropzone.module.scss'

export interface Props {
    uploadFile: any
}

function Dropzone(props: Props) {
    const [drag, setDrag] = useState(false)

    function dragStartHandler(e: any) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e: any) {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e: any) {
        e.preventDefault();
        let file = e.dataTransfer.files
        props.uploadFile(file, file[0].name)
        setDrag(false)
    }

    return (
        <div className={styles.drop}>
            {drag
                ? <div
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => onDropHandler(e)}
                    className={styles.drop_area}
                >Отпустите файлы, чтобы их загрузить </div>
                : <div
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    className={styles.drop_area}
                >Перетащите файлы, чтобы загрузить их</div>
            }
        </div>
    )
}

export default Dropzone