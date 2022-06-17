import { Context } from '../Context';
import { processSee } from './processSee';


export function processSeealso(ctx: Context, seealsoNode: Element) {
    if (ctx.previousNode !== 'seealso') {
        ctx.markdown.push('\n#### See also\n');
    }
    ctx.markdown.push('\n- ');
    processSee(ctx, seealsoNode);
    ctx.markdown.push('\n');
}