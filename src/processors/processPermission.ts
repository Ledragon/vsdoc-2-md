import { Context } from '../Context';
import { process } from './process';
import { sanitizeMarkdown } from '../utils';

export function processPermission(ctx: Context, permissionNode: Element) {
    const cref = permissionNode.getAttribute('cref');
    if (cref) {
        if (ctx.previousNode !== 'permission') {
            ctx.markdown.push('\n#### Permissions\n\n');
        }

        let permissionName = sanitizeMarkdown(cref.substring(2));
        permissionName = permissionName.replace(ctx.namespace + '.', '');

        ctx.markdown.push('- ');
        ctx.markdown.push(permissionName);
        ctx.markdown.push(': ')
        process(ctx, permissionNode);
        ctx.markdown.push('\n');
    }
}