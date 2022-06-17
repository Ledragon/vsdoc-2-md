import { Context } from '../Context';
import { findChildNode } from '../utils';

export function processAssembly(ctx: Context, assemblyNode: Element) {
    const nameNode = findChildNode(assemblyNode, 'name');
    ctx.markdown.push('# ');
    if (nameNode?.textContent) {
        ctx.markdown.push(nameNode.textContent);
    }
    ctx.markdown.push('\n');
}