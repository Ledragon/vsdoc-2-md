import { Context } from '../Context';
import { trimEnd, trimStart } from '../utils';

export function processText(ctx: Context, textNode: Element) {
    if (!ctx.previousNode || ctx.previousNode === 'list' || ctx.previousNode === 'code') {
        textNode.nodeValue = trimStart(textNode.nodeValue);
    }
    if (!ctx.nextNode) {
        textNode.nodeValue = trimEnd(textNode.nodeValue);
    }

    ctx.markdown.push(textNode.nodeValue.replace(/\s+/g, ' '));
}