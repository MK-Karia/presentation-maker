import { EditorType } from "./EditorType"

function removeObjFromSlide(editor: EditorType): EditorType {
    if (!editor.selection || editor.selection.selectedObjId === null) {
        return editor;
    }

    const removeObjId = editor.selection.selectedObjId;

    const removeSlideIndex = editor.presentation.slides.findIndex(slide => slide.id == editor.selection.selectedSlideId);
    const foundItemInText = editor.presentation.slides[removeSlideIndex].text.find(item => item.id === removeObjId);
    const foundItemInImage = editor.presentation.slides[removeSlideIndex].images.find(item => item.id === removeObjId);

    if (foundItemInText) {
        const slides = editor.presentation.slides.map((slide) => {
            if (slide.id === editor.selection.selectedSlideId) {
                return {
                    ...slide,
                    text: slide.text.filter((textContent) => textContent.id !== removeObjId),
                }
            }
            return slide;
        });

        return {
            presentation: {
                ...editor.presentation,
                slides: slides,
            },
            selection: {selectedSlideId: editor.selection.selectedSlideId, selectedObjId: null}
        }
    }

    if (foundItemInImage) {
        const slides = editor.presentation.slides.map((slide) => {
            if (slide.id === editor.selection.selectedSlideId) {
                return {
                    ...slide,
                    images: slide.images.filter((textContent) => textContent.id !== removeObjId),
                }
            }
            return slide;
        });

        return {
            presentation: {
                ...editor.presentation,
                slides: slides,
            },
            selection: {selectedSlideId: editor.selection.selectedSlideId, selectedObjId: null}
        }
    }

    return editor;
}

export {
    removeObjFromSlide
}