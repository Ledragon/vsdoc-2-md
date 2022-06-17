export function processException(ctx, exceptionNode) {
    var cref = exceptionNode.getAttribute('cref');
    if (cref) {
        var exName = sanitizeMarkdown(cref.substring(2));
        exName = exName.replace(ctx.namespace + '.', '');

        ctx.markdown.push('\n*');
        ctx.markdown.push(exName);
        ctx.markdown.push(':* ');
        process(ctx, exceptionNode);
        ctx.markdown.push('\n');
    }
}