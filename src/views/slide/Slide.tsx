import { CSSProperties } from 'react'
import { SlideType } from '../../store/PresentationType'
import styles from './Slide.module.css'
import { TextContent } from './TextContent';
import { ImageContent } from './ImageContent';
import { dispatch } from '../../store/editor';
import { setSelection } from '../../store/setSelection';

const SLIDE_WIDTH: number = 935;
const SLIDE_HEIGHT: number = 525;

type SlideProps = {
    slide: SlideType | null,
    scale?: number,
    isSelected: boolean,
    className: string,
    selectedObjId: string | null,
}

function Slide({slide, scale = 1, isSelected, className, selectedObjId}: SlideProps) {
    if (slide === null) {
        return (<></>)
    }

    function onObjClick(event: React.MouseEvent<HTMLDivElement>, objId: string): void {
        event.stopPropagation(); 
        if (scale == 1) {
            dispatch(setSelection, {
                selectedSlideId: slide?.id,
                selectedObjId: objId,
            })
        }

    }

    const slideStyles: CSSProperties = {
        width: `${SLIDE_WIDTH * scale}px`,
        height: `${SLIDE_HEIGHT * scale}px`,
        ...(slide.background.type === "solid" 
            ? { backgroundColor: slide.background.color } 
            : { backgroundImage: `url(${slide.background.src})`, backgroundSize: 'cover' })
    };

    if (isSelected) {
        slideStyles.border = '3px solid #640d14'
    }

    return (
        <div style={slideStyles} className={styles.slide + ' ' + className}>
            {slide.text.map(text => {
                return <div key={text.id} onClick={(event) => onObjClick(event, text.id)}><TextContent key={text.id} textContent={text} scale={scale} isSelected={text.id == selectedObjId}></TextContent></div>
            })}
            {slide.images.map(image => {
                return <div key={image.id} onClick={(event) => onObjClick(event, image.id)}><ImageContent imageContent={image} scale={scale} isSelected={image.id == selectedObjId}></ImageContent></div>
            })}
        </div>
    )
}

export {
    Slide
}