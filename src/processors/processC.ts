import { Context } from '../Context';

export function processC(ctx: Context, cNode: Element) {
    ctx.markdown.push('`');
    if (cNode?.textContent) {
        ctx.markdown.push(cNode.textContent);
    }
    ctx.markdown.push('`');
}