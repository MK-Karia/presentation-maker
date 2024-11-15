import { EditorType } from "./EditorType"

function changeTextPosition(editor: EditorType, newPosition: {x: number, y: number}): EditorType {
    if (!editor.selection.selectedSlideId) {
        return editor
    }

    const slides = editor.presentation.slides.map((slide) => {
        if (slide.id === editor.selection.selectedSlideId) {
            return {
                ...slide,
                text: slide.text.map(textItem => {
                    if (textItem.id === editor.selection.selectedObjId) {
                        return {
                            ...textItem,
                            pos: newPosition,
                        }
                    }
                    return textItem;
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
    changeTextPosition
}