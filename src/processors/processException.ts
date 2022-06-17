import { Context } from '../Context';
import { process } from '.';
import { sanitizeMarkdown } from '../utils';

export function processException(ctx: Context, exceptionNode: Element) {
    var cref = exceptionNode.getAttribute('cref');
    if (cref) {
        let exName = sanitizeMarkdown(cref.substring(2));
        exName = exName.replace(ctx.namespace + '.', '');

        ctx.markdown.push('\n*');
        ctx.markdown.push(exName);
        ctx.markdown.push(':* ');
        process(ctx, exceptionNode);
        ctx.markdown.push('\n');
    }
}