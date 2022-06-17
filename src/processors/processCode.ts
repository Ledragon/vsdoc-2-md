import { Context } from '../Context';

export function processCode(ctx: Context, codeNode: Element) {
    ctx.markdown.push('\n```\n');
    if (codeNode?.textContent) {
        ctx.markdown.push(codeNode.textContent);
    }
    ctx.markdown.push('\n```\n');
}