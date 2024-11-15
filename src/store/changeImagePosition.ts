import { EditorType } from "./EditorType"

function changeImagePosition(editor: EditorType, newPosition: {x: number, y: number}): EditorType {
    if (!editor.selection.selectedSlideId) {
        return editor
    }

    const slides = editor.presentation.slides.map((slide) => {
        if (slide.id === editor.selection.selectedSlideId) {
            return {
                ...slide,
                images: slide.images.map(imageItem => {
                    if (imageItem.id === editor.selection.selectedObjId) {
                        return {
                            ...imageItem,
                            pos: newPosition,
                        }
                    }
                    return imageItem;
                }),
            }
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
    changeImagePosition
}