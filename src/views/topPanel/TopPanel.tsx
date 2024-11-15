import styles from './TopPanel.module.css'
import { Button } from '../../component/button/Button'
import { dispatch } from '../../store/editor'
import { removeSlide } from '../../store/removeSlide'
import { renamePresentaionTitle } from '../../store/renamePresentaionTitle'
import { addSlide } from '../../store/addSlide'
import { addImageToSlide } from '../../store/addImageToSlide'
import { addTextToSlide } from '../../store/addTextToSlide'
import { removeObjFromSlide } from '../../store/removeObjFromSlide'
import { changeBackground } from '../../store/changeBackground'
import React, { useState } from 'react';

type TopPanelProps = {
    title: string
}


function TopPanel({title}: TopPanelProps) {
    const [value, setValue] = useState(''); 

    function onAddSlde(): void {
        dispatch(addSlide)
    }

    function onRemoveSlde(): void {
        dispatch(removeSlide)
    }

    const onTitleChange: React.ChangeEventHandler = (event) => {
        dispatch(renamePresentaionTitle, (event.target as HTMLInputElement).value)
    }

    function onAddText(): void {
        dispatch(addTextToSlide)
    }

    function onAddImage(): void {
        dispatch(addImageToSlide)
    }

    function onRemoveElem(): void {
        dispatch(removeObjFromSlide)
    }

    function onChangeBackgroundColor(): void {
        dispatch(changeBackground, 'solid')
    }

    function onChangeBackgroundImage(): void {
        dispatch(changeBackground, 'image')
    }

    const handleChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className={styles.topPanel}>
            <input className={styles.title} type="text" defaultValue={title} onChange={onTitleChange}/>
            <div className={styles.toolPanel}>
                <Button className={styles.button} text={'Добавить слайд'} icon={'./src/assets/add-slide.svg'} onClick={onAddSlde}></Button>
                <Button className={styles.button} text={'Удалить слайд'} icon={'./src/assets/remove-slide.svg'}  onClick={onRemoveSlde}></Button>
                <Button className={styles.button} text={'Добавить текст'} icon={'./src/assets/add-text.svg'} onClick={onAddText}></Button>
                <Button className={styles.button} text={'Добавить картинку'} icon={'./src/assets/add-image.svg'} onClick={onAddImage}></Button>
                <Button className={styles.button} text={'Удалить элемент'} icon={'./src/assets/remove.svg'}  onClick={onRemoveElem}></Button>
                <Button className={styles.button} text={'Изменить цвет фона'} icon={'./src/assets/edit.svg'}  onClick={onChangeBackgroundColor}></Button>
                <Button className={styles.button} text={'Изменить фон'} icon={'./src/assets/edit.svg'}  onClick={onChangeBackgroundImage}></Button>
                <input type="color" value={value} onChange={handleChange} />
            </div>
        </div>
    )
}

export { 
    TopPanel 
}