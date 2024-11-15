import { useState, useRef } from 'react';
import { CSSProperties } from "react";
import { TextContentType } from "../../store/PresentationType";
import { dispatch } from '../../store/editor'; 
import { changeTextPosition } from '../../store/changeTextPosition'; 
import useDragAndDrop from '../../store/useDragAndDrop'; 

const BORDER = 3;

type TextContentProps = {
    textContent: TextContentType,
    scale?: number,
    isSelected: boolean
}

function TextContent({ textContent, scale = 1, isSelected }: TextContentProps) {
    const ref = useRef<HTMLParagraphElement | null>(null); 
    const [pos, setPos] = useState({ x: textContent.pos.x, y: textContent.pos.y })

    const onDrop = (newPosition: { x: number; y: number }) => {
        dispatch(changeTextPosition, newPosition); 
    };

    const handleMouseDown = useDragAndDrop(ref, pos, setPos, onDrop);

    const textContentStyles: CSSProperties = {
        position: 'absolute',
        top: `${pos.y * scale}px`,
        left: `${pos.x * scale}px`,
        width: `${textContent.size.width * scale}px`,
        height: `${textContent.size.height * scale}px`,
        fontSize: `${textContent.fontSize * scale}px`,
        fontFamily: `${textContent.fontFamily}`,
    }

    if (isSelected && scale === 1) {
        textContentStyles.border = `${BORDER}px solid #640d14`;
        textContentStyles.top = `${(textContent.pos.y - BORDER) * scale}px`;
        textContentStyles.left = `${(textContent.pos.x - BORDER) * scale}px`;
    }

    return (
        <p ref={ref} style={textContentStyles} onMouseDown={handleMouseDown}>
            {textContent.value}
        </p>
    );
}

export {
    TextContent
};