import { Context } from '../Context';
import { process } from './process';

export function processTypeparam(ctx: Context, typeparamNode: Element) {
    const name = typeparamNode.getAttribute('name');
    if (name) {
        if (ctx.previousNode !== 'typeparam') {
            ctx.markdown.push('\n#### Type Parameters\n\n');
        }
        ctx.markdown.push('- ');
        ctx.markdown.push(name);
        ctx.markdown.push(' - ');
        process(ctx, typeparamNode);
        ctx.markdown.push('\n');
    }
}