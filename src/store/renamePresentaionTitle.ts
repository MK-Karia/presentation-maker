import { EditorType } from "./EditorType"

function renamePresentaionTitle(editor: EditorType, newTitle: string): EditorType {
    return {
        presentation: {
            ...editor.presentation,
            title: newTitle,
        },
        selection: editor.selection
    }
}

export {
    renamePresentaionTitle
}