import { findChildNodes } from './findChildNodes';

export function findChildNode(node, nodeName) {
    let childNodes = findChildNodes(node, nodeName);
    return childNodes ? childNodes[0] : undefined;
}