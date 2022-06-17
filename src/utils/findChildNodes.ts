export function findChildNodes(node: Node, nodeName: string) {
    let result: Node[] = [];
    if (node) {
        for (let i = 0; i < node.childNodes.length; i++) {
            const childNode = node.childNodes[i];
            if (childNode.nodeName === nodeName) {
                result = result || [];
                result.push(childNode);
            }
        }
    }
    return result;
}