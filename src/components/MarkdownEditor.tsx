import * as React from 'react';

interface MardownEditorProps {
    markdown: string;
}

const MardownEditor = (props?: MardownEditorProps, context?: any) => {
    return (
        <section className="content-section">
            <header className="content-header">
                MARKDOWN
                <button className="button" type="button">
                    COPY TO CLIPBOARD
                </button>
            </header>
            <section className="content">
                <textarea id="markdown-editor"
                    className="markdown-editor"
                    spellCheck="false"
                    value={props.markdown}>
                </textarea>
            </section>
        </section>
    )
}
export default MardownEditor;