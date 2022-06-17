import { Context } from '../Context';

export function processParamref(ctx: Context, paramrefNode: Element) {
    const name = paramrefNode.getAttribute('name');
    if (name) {
        ctx.markdown.push(name);
    }
}
