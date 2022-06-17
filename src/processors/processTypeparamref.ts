export function processTypeparamref(ctx, typeparamrefNode) {
    var name = typeparamrefNode.getAttribute('name');
    if (name) {
        ctx.markdown.push(name);
    }
}