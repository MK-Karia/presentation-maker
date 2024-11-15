import { useState, useRef } from 'react';
import { CSSProperties } from "react";
import { ImageContentType } from "../../store/PresentationType";
import { dispatch } from '../../store/editor'; 
import { changeImagePosition } from '../../store/changeImagePosition'; 
import useDragAndDrop from '../../store/useDragAndDrop'; 

const BORDER = 3;

type ImageContentProps = {
    imageContent: ImageContentType,
    scale?: number,
    isSelected: boolean,
}

function ImageContent({ imageContent, scale = 1, isSelected }: ImageContentProps) {
    const ref = useRef<HTMLImageElement | null>(null); 
    const [pos, setPos] = useState({ x: imageContent.pos.x * scale, y: imageContent.pos.y * scale })

    const onDrop = (newPosition: { x: number; y: number }) => {
        dispatch(changeImagePosition, newPosition); 
    };

    const handleMouseDown = useDragAndDrop(ref, pos, setPos, onDrop);

    const imageContentStyles: CSSProperties = {
        position: 'absolute',
        top: `${pos.y}px`,
        left: `${pos.x}px`,
        width: `${imageContent.size.width * scale}px`,
        height: `${imageContent.size.height * scale}px`,
    };

    if (isSelected && scale === 1) {
        imageContentStyles.border = `${BORDER}px solid #640d14`;
    }

    return (
        <img 
            ref={ref} 
            style={imageContentStyles} 
            src={imageContent.src} 
            onMouseDown={handleMouseDown} 
            draggable="false" 
        />
    );
}

export {
    ImageContent
};