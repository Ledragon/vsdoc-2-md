import { Context } from '../Context';

export function processC(ctx: Context, cNode) {
    ctx.markdown.push('`');
    ctx.markdown.push(cNode.textContent);
    ctx.markdown.push('`');
}