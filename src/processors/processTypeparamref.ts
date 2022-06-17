import { Context } from '../Context';

export function processTypeparamref(ctx: Context, typeparamrefNode: Element) {
    var name = typeparamrefNode.getAttribute('name');
    if (name) {
        ctx.markdown.push(name);
    }
}