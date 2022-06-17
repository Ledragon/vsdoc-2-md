import { Context } from '../Context';
import { process } from './process';

export function processValue(ctx: Context, valueNode: Element) {
    ctx.markdown.push('\n#### Value\n\n');
    process(ctx, valueNode);
    ctx.markdown.push('\n');
}