export function processReturns(ctx, returnsNode) {
    ctx.markdown.push('\n#### Returns\n\n');
    process(ctx, returnsNode);
    ctx.markdown.push('\n');
}