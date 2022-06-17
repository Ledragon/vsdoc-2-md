import { findChildNodes } from './findChildNodes';

export function findChildNode(node: Element, nodeName: string): Element | undefined {
    let childNodes = findChildNodes(node, nodeName);
    return childNodes ? childNodes[0] : undefined;
}