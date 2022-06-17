// Ref: http://stackoverflow.com/a/5817243/1466456
export function stripEmptyTextNodes(node: Node) {
    let child: Node | null, next: Node | null;
    switch (node.nodeType) {
        case 3: // Text node
            const { nodeValue } = node;
            if (nodeValue !== null && /^\s*$/.test(nodeValue)) {
                node.parentNode?.removeChild(node);
            }
            break;
        case 1: // Element node
        case 9: // Document node
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                stripEmptyTextNodes(child);
                child = next;
            }
            break;
    }
}