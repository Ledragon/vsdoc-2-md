import { Context } from '../Context';
import { process } from './process';

export function processParam(ctx: Context, paramNode: Element) {
    var paramName = paramNode.getAttribute('name');
    var paramType = ctx.paramTypes[paramName];

    if (ctx.previousNode !== 'param') {
        ctx.markdown.push('\n| Name | Description |\n');
        ctx.markdown.push('| ---- | ----------- |\n');
    }
    ctx.markdown.push('| ');
    ctx.markdown.push(paramName);
    ctx.markdown.push(' | *');
    if (paramType) {
        ctx.markdown.push(paramType);
    } else {
        ctx.markdown.push('Unknown type');
    }
    ctx.markdown.push('*<br>');
    process(ctx, paramNode);
    ctx.markdown.push(' |\n');
}