import { Context } from '../Context';
import { process } from '.';

export function processPara(ctx: Context, paraNode: Element) {
    ctx.markdown.push('\n');
    process(ctx, paraNode);
    ctx.markdown.push('\n');
}