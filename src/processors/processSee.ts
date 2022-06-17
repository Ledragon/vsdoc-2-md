export function processSee(ctx, seeNode) {
    var cref = seeNode.getAttribute('cref'); // For example: T:System.String
    if (cref) {
        var typeName = sanitizeMarkdown(cref.substring(2));
        typeName = typeName.replace(ctx.namespace + '.', '');
        ctx.markdown.push('<a href="#');
        ctx.markdown.push(typeName.toLowerCase());
        ctx.markdown.push('">')
        ctx.markdown.push(typeName);
        ctx.markdown.push('</a>');
    } else {
        var href = seeNode.getAttribute('href'); // For example: http://stackoverflow.com/
        if (href) {
            ctx.markdown.push('<a href="');
            ctx.markdown.push(href);
            ctx.markdown.push('">')
            ctx.markdown.push(href);
            ctx.markdown.push('</a>');
        }
    }
}