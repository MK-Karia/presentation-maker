import { dispatch } from "../../store/editor";
import { SlideType } from "../../store/PresentationType";
import { setSelection } from "../../store/setSelection";
import { Slide } from "../slide/Slide";
import styles from './Workspace.module.css'

type WorkspaceProps = {
    slide: SlideType | null,
    selectedObjId: string | null
}

function Workspace({slide, selectedObjId}: WorkspaceProps) {
    
    function onSlideClick(event: React.MouseEvent<HTMLDivElement>): void {
        const target = event.target as HTMLElement; 


        const isImageSelected = slide?.images?.some(image => image.id === selectedObjId && target instanceof HTMLImageElement && target.id === image.id);
        const isTextSelected = slide?.text?.some(text => text.id === selectedObjId && target instanceof HTMLParagraphElement && target.id === text.id);

        if (!isImageSelected || !isTextSelected) {
            dispatch(setSelection, {
                selectedSlideId: slide?.id,
                selectedObjId: null,
            })
        }
    }

    return (
        <div className={styles.workspace} onClick={(event) => onSlideClick(event)}>
            <Slide slide={slide} isSelected={false} className={styles.currentSlide} selectedObjId={selectedObjId}></Slide>
        </div>
    )
}

export {
    Workspace
}