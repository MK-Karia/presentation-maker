import { EditorType } from "./EditorType"
import { generateSecureRandomString } from "./generationId";
import { TextContentType } from "./PresentationType"

function addTextToSlide(editor: EditorType): EditorType {
    const newText: TextContentType = {
        id: generateSecureRandomString(10),
        pos: {x: 350, y: 50},
        size: {width: 280, height: 100},
        fontFamily: 'Arial',
        fontSize: 28,
        value: 'Это новый текст'
    }

    const slides = editor.presentation.slides.map((slide) => { 
        if (slide.id === editor.selection.selectedSlideId) { 
            return { 
                ...slide, 
                text: [
                    ...slide.text,
                    newText,
                ]
            }; 
        } 
        return slide; 
    }); 

    return {
        presentation: {
            ...editor.presentation,
            slides: slides
        },
        selection: editor.selection
    }
}


export {
    addTextToSlide
}