export function findChildNodes(node: Element, nodeName: string) {
    let result: Element[] = [];
    if (node) {
        for (let i = 0; i < node.childNodes.length; i++) {
            const childNode = node.childNodes[i];
            if (childNode.nodeName === nodeName) {
                result = result || [];
                result.push(childNode as Element);
            }
        }
    }
    return result;
}