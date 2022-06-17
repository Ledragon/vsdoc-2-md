import { Context } from '../Context';
import { rearrangeParametersInContext } from '../utils';
import { process } from '.';

export function processMember(ctx: Context, memberNode: Element) {
    var type = memberNode.type;
    var name = memberNode.name;

    if (type === 'T') {
        ctx.namespace = name.substring(0, name.lastIndexOf('.'));
        name = name.replace(ctx.namespace + '.', '');
        ctx.typeName = name;

        ctx.markdown.push('\n\n## ');
        ctx.markdown.push(name);
        ctx.markdown.push('\n');

        ctx.types.push(name);
    } else {
        if (type === 'M') {
            name = rearrangeParametersInContext(ctx, memberNode);
        }
        name = name.replace(ctx.namespace + '.' + ctx.typeName + '.', '');
        if (name.indexOf('#ctor') >= 0) {
            name = name.replace('#ctor', 'Constructor');
        }

        ctx.markdown.push('\n### ');
        ctx.markdown.push(name);
        ctx.markdown.push('\n');
    }

    process(ctx, memberNode);
}