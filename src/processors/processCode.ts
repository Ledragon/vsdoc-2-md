export function processCode(ctx, codeNode) {
    ctx.markdown.push('\n```\n');
    ctx.markdown.push(codeNode.textContent);
    ctx.markdown.push('\n```\n');
}