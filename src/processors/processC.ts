import { Context } from '../Context';

export function processC(ctx: Context, cNode: Node) {
    ctx.markdown.push('`');
    if (cNode?.textContent) {
        ctx.markdown.push(cNode.textContent);
    }
    ctx.markdown.push('`');
}