import { useRef } from 'react';

function useDragAndDrop(ref: React.RefObject<HTMLElement>, position: { x: number; y: number }, setPosition: (newPosition: { x: number; y: number }) => void, onDrop: (newPosition: { x: number; y: number }) => void) {
    const startPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const isDragging = useRef(false); // Используем useRef для состояния перетаскивания

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button === 0) { // Проверяем нажатие левой кнопки мыши
            startPos.current = { x: e.pageX, y: e.pageY };
            isDragging.current = true;
            document.body.style.userSelect = 'none'; // Запрет выделения текста

            if (ref.current) {
                ref.current.style.cursor = 'grabbing'; // Изменяем курсор на 'grabbing'
            }

            // Добавляем обработчики событий
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging.current) {
            const deltaX = e.pageX - startPos.current.x;
            const deltaY = e.pageY - startPos.current.y;

            const newPosition = {
                x: position.x + deltaX,
                y: position.y + deltaY,
            };

            setPosition(newPosition); // Обновляем состояние позиции

            if (ref.current) {
                ref.current.style.left = `${newPosition.x}px`;
                ref.current.style.top = `${newPosition.y}px`;
            }
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        document.body.style.userSelect = ''; // Разрешаем выделение текста

        // Удаляем обработчики событий
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);

        if (ref.current) {
            ref.current.style.cursor = 'grab'; // Возвращаем курсор к 'grab'
        }

        onDrop(position); // Вызываем функцию onDrop с новой позицией
    };

    return handleMouseDown; // Возвращаем обработчик mousedown для использования в компоненте
}

export default useDragAndDrop;