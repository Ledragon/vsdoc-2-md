export function processValue(ctx, valueNode) {
    ctx.markdown.push('\n#### Value\n\n');
    process(ctx, valueNode);
    ctx.markdown.push('\n');
}