import styles from './App.module.css'
import { EditorType } from './store/EditorType';
import { SlideList } from './views/slidesList/SlidesList';
import { TopPanel } from "./views/topPanel/TopPanel";
import { Workspace } from './views/workspace/Workspace';

type AppProps = {
    editor: EditorType;
};

function App({ editor }: AppProps) {
    return (
        <>
            <TopPanel title={editor.presentation.title}></TopPanel>
            <div className={styles.container}>
                <SlideList slides={editor.presentation.slides} selection={editor.selection}></SlideList>
                <Workspace slide={editor.presentation.slides.find(slide => slide.id == editor.selection.selectedSlideId) || null} selectedObjId={editor.selection.selectedObjId}></Workspace>
            </div>
        </>
    )
}

export default App
