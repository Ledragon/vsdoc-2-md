import { Context } from '../Context';
import ProcessorMap from './ProcessorMap';

export function process(ctx: Context, node: Node) {
    for (let i = 0; i < node.childNodes.length; i++) {
        const childNode = node.childNodes[i] as Element;

        ctx.previousNode = (i === 0) ? undefined : node.childNodes[i - 1].nodeName;
        ctx.nextNode = (i === node.childNodes.length - 1) ? undefined : node.childNodes[i + 1].nodeName;

        ctx.nodeStack.push(childNode.nodeName);
        const processor = ProcessorMap[childNode.nodeName];
        if (processor) {
            processor(ctx, childNode);
        }
        ctx.nodeStack.pop();
    }
}