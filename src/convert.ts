import { marked } from 'marked';

import { vsdocToMarkdown } from './vsdocToMarkdown';

const Convert = {
    markdownToHtml: (markdown: string) => marked(markdown),
    vsdocToMarkdown
};
export default Convert;