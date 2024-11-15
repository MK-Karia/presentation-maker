import { dispatch } from "../../store/editor";
import { SelectionType } from "../../store/EditorType";
import { SlideType } from "../../store/PresentationType"
import { setSelection } from "../../store/setSelection";
import { Slide } from "../slide/Slide"
import styles from './SlideList.module.css'

const SLIDE_PREVIEW_SCALE = 0.3;

type SlideListProps = {
    slides: Array<SlideType>,
    selection: SelectionType,
}

function SlideList({slides, selection}: SlideListProps) {

    function onSlideClick(slideId: string): void {
        dispatch(setSelection, {
            selectedSlideId: slideId,
        })
    }

    return (
        <div className={styles.slideList}>
            {slides.map(slide =>
                <div key={slide.id} onClick={() => onSlideClick(slide.id)} className={styles.itemContainer}>
                    <p className={styles.slideNumber}>{slides.findIndex(sl => sl.id == slide.id) + 1}</p>
                    <Slide
                        key={slide.id}
                        slide={slide}
                        scale={SLIDE_PREVIEW_SCALE}
                        isSelected={slide.id == selection.selectedSlideId}
                        className={styles.item}
                        selectedObjId={selection.selectedObjId}
                    ></Slide>
                </div>
            )}
        </div>
    )
}

export {
    SlideList
}