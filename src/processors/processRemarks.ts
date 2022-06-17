export function processRemarks(ctx, remarksNode) {
    ctx.markdown.push('\n#### Remarks\n\n');
    process(ctx, remarksNode);
    ctx.markdown.push('\n');
}