export function processSeealso(ctx, seealsoNode) {
    if (ctx.previousNode !== 'seealso') {
        ctx.markdown.push('\n#### See also\n');
    }
    ctx.markdown.push('\n- ');
    processSee(ctx, seealsoNode);
    ctx.markdown.push('\n');
}