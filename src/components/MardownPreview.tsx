import * as React from 'react';

interface MarkdownPreviewProps {

}

const MarkdownPreview = (props?: MarkdownPreviewProps, context?: any) => {
    return (
        <section className="content-section preview">
            <header className="content-header">PREVIEW</header>
            <section className="content markdown-preview markdown-body" id="markdown-preview"></section>
        </section>
    )
}
export default MarkdownPreview;