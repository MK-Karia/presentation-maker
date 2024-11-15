import { EditorType } from "./EditorType"
import { generateSecureRandomString } from "./generationId";
import { ImageContentType } from "./PresentationType"

function addImageToSlide(editor: EditorType): EditorType {
    const newImage: ImageContentType = {
        id: generateSecureRandomString(10),
        pos: {x: 300, y: 150},
        size: {width: 300, height: 300},
        src: './src/assets/image5.jpg'
    }

    const slides = editor.presentation.slides.map((slide) => { 
        if (slide.id === editor.selection.selectedSlideId) { 
            return { 
                ...slide, 
                images: [
                    ...slide.images,
                    newImage,
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
    addImageToSlide
}