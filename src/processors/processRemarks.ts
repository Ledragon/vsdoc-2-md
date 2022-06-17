import { Context } from '../Context';
import { process } from './process';

export function processRemarks(ctx: Context, remarksNode: Element) {
    ctx.markdown.push('\n#### Remarks\n\n');
    process(ctx, remarksNode);
    ctx.markdown.push('\n');
}