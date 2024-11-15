type SlideObj = {
    pos: {
        x: number,
        y: number
    },
    size: {
        width: number,
        height: number
    },
    id: string
}

type TextContentType = SlideObj & {
    value: string,
    fontFamily: string,
    fontSize: number,
}

type ImageContentType = SlideObj & {
    src: string
}

type SolidBackground = {
    type: 'solid',
    color: string,
}
  
type ImageBackground = {
    type: 'image',
    src: string,
}
  
type Background = SolidBackground | ImageBackground

type SlideType = {
    id: string,
    text: Array<TextContentType>,
    images: Array<ImageContentType>,
    background: Background
}

type SlideCollection = Array<SlideType> 

type Presentation = {
    title: string,
    slides: SlideCollection
}

export type{ 
    SlideObj, 
    TextContentType, 
    ImageContentType, 
    SolidBackground, 
    ImageBackground, 
    Background, 
    SlideType, 
    SlideCollection, 
    Presentation,
};