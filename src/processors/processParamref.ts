export function processParamref(ctx, paramrefNode) {
    var name = paramrefNode.getAttribute('name');
    if (name) {
        ctx.markdown.push(name);
    }
}
