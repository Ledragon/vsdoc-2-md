import { Context } from '../Context';
import { process } from './process';

export function processSummary(ctx: Context, summaryNode: Element) {
    ctx.markdown.push('\n');
    process(ctx, summaryNode);
    ctx.markdown.push('\n');
}