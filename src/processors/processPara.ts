import { Context } from '../Context';
import { process } from '../process';

export function processPara(ctx: Context, paraNode) {
    ctx.markdown.push('\n');
    process(ctx, paraNode);
    ctx.markdown.push('\n');
}