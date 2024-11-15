import { Presentation } from "./PresentationType";

type SelectionType = {
    selectedSlideId: string | null,
    selectedObjId: string | null,
} 

type EditorType = {
    presentation: Presentation,
    selection: SelectionType
}

export type{
    SelectionType,
    EditorType
}