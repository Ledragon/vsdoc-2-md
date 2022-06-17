export function findChildNodes(node, nodeName) {
    let result: any[] = [];
    if (node) {
        for (var i = 0; i < node.childNodes.length; i++) {
            var childNode = node.childNodes[i];
            if (childNode.nodeName === nodeName) {
                result = result || [];
                result.push(childNode);
            }
        }
    }
    return result;
}