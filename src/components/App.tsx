import * as React from 'react';
import DropZone from './DropZone';
import MardownPreview from './MardownPreview';
import MardownEditor from './MarkdownEditor';

interface AppProps {

}

const App = (props?: AppProps, context?: any) => {
    return (
        <div className="viewport">
            <DropZone />
            <section className="content-section-container">
                <MardownEditor></MardownEditor>
                <MardownPreview></MardownPreview>
            </section>
        </div>
    )
}
export default App;