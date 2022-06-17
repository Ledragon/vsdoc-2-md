import { Context } from '../Context';
import { process } from './process';

export function processReturns(ctx: Context, returnsNode: Element) {
    ctx.markdown.push('\n#### Returns\n\n');
    process(ctx, returnsNode);
    ctx.markdown.push('\n');
}