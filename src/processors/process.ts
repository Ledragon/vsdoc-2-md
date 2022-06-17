import { Context } from '../Context';
import ProcessorMap from '../ProcessorMap';

export function process(ctx: Context, node) {
    for (var i = 0; i < node.childNodes.length; i++) {
        var childNode = node.childNodes[i];

        ctx.previousNode = (i === 0) ? undefined : node.childNodes[i - 1].nodeName;
        ctx.nextNode = (i === node.childNodes.length - 1) ? undefined : node.childNodes[i + 1].nodeName;

        ctx.nodeStack.push(childNode.nodeName);
        var processor = ProcessorMap[childNode.nodeName];
        if (processor) processor(ctx, childNode);
        ctx.nodeStack.pop();
    }
}