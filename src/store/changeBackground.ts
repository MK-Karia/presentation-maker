import { EditorType } from "./EditorType"
import { Background } from "./PresentationType"


function changeBackground(editor: EditorType, type: string): EditorType {
    if (!editor.selection.selectedSlideId) {
        return editor
    }

    let newBackground: Background

    if (type === 'solid') {
        newBackground = {
            type: 'solid',
            color: '#c41e3a'
        }
    }

    if (type === 'image') {
        newBackground = {
            type: 'image',
            src: './src/assets/image3.jpg'
        }
    }

    const slides = editor.presentation.slides.map((slide) => { 
        if (slide.id === editor.selection.selectedSlideId) { 
            return { 
                ...slide, 
                background: newBackground, 
            }; 
        } 
        return slide; 
    })

    return {
        presentation: {
            ...editor.presentation,
            slides: slides
        },
        selection: editor.selection
    }
}

export {
    changeBackground
}