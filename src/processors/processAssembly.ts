import { Context } from '../Context';
import { findChildNode } from '../utils';

export function processAssembly(ctx: Context, assemblyNode) {
    const nameNode = findChildNode(assemblyNode, 'name');
    ctx.markdown.push('# ');
    ctx.markdown.push(nameNode.textContent);
    ctx.markdown.push('\n');
}