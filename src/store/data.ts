import { EditorType } from "./EditorType";
import { Presentation, SlideType } from "./PresentationType";

const slide1: SlideType = {
    id: '1qwerty',
    text: [
        {
            id: '1',
            pos: {x: 100, y: 80},
            size: {width: 300, height: 200},
            value: 'Это первый предпоказ этого продукта',
            fontFamily: 'Arial',
            fontSize: 24,
        },
        {
            id: '2',
            pos: {x: 200, y: 180},
            size: {width: 300, height: 20},
            value: 'просим проявить понимание. Спасибо',
            fontFamily: 'Arial',
            fontSize: 12,
        }
    ],
    images: [
        {
            id: '1a',
            pos: {x: 500, y: 50},
            size: {width: 400, height: 250},
            src: './src/assets/image1.jpg'
        },
        {
            id: '2a',
            pos: {x: 50, y: 250},
            size: {width: 380, height: 200},
            src: './src/assets/image2.jpg'
        }
    ],
    background: { type: 'solid', color: '#fff'}
}

const slide2: SlideType = {
    id: '2qwerty',
    text: [
        {
            id: '21',
            pos: {x: 200, y: 200},
            size: {width: 300, height: 200},
            value: 'Тут находится текст',
            fontFamily: 'Arial',
            fontSize: 24,
        },
    ],
    images: [
    ],
    background: { type: 'image', src: './src/assets/image3.jpg'}
}

const presentation: Presentation = {
    title: 'Предпоказ',
    slides: [slide1, slide2]
}

const editor: EditorType = {
    presentation,
    selection: {selectedSlideId: presentation.slides[0].id, selectedObjId: null},
}

export { 
    editor
};