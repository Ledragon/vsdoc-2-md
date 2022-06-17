import { findChildNodes } from './findChildNodes';

export function findChildNode(node: Node, nodeName: string): Node | undefined {
    let childNodes = findChildNodes(node, nodeName);
    return childNodes ? childNodes[0] : undefined;
}