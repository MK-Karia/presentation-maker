import { EditorType } from "./EditorType"
import { generateSecureRandomString } from "./generationId";
import { SlideType } from "./PresentationType"


function addSlide(editor: EditorType): EditorType {
    const newSlide: SlideType = {
        id: generateSecureRandomString(10),
        images: [],
        text: [],
        background: {type: "solid", color: "#fff"}
    }
    
    const selectedSlideIndex = editor.presentation.slides.findIndex(slide => slide.id == editor.selection.selectedSlideId);

    return {
        presentation: {
            ...editor.presentation,
            slides: [
                ...editor.presentation.slides.slice(0, selectedSlideIndex + 1),
                newSlide,
                ...editor.presentation.slides.slice(selectedSlideIndex + 1)
            ]
        },
        selection: editor.selection
    }
}

export {
    addSlide
}