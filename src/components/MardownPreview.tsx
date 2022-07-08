import 'github-markdown-css/github-markdown.css';
import 'github-markdown-css/github-markdown-light.css';
import * as React from 'react';
import { marked } from 'marked';


interface MarkdownPreviewProps {
    markdown: string;
}

const MarkdownPreview = (props?: MarkdownPreviewProps, context?: any) => {
    return (
        <section className="content-section preview">
            <header className="content-header">PREVIEW</header>
            <section className="content markdown-preview markdown-body" id="markdown-preview"
                dangerouslySetInnerHTML={{ __html: marked(props.markdown) }}>
            </section>
        </section>
    )
}
export default MarkdownPreview;