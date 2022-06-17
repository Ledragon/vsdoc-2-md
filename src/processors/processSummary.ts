export function processSummary(ctx, summaryNode) {
    ctx.markdown.push('\n');
    process(ctx, summaryNode);
    ctx.markdown.push('\n');
}