// Ref: http://stackoverflow.com/a/5817243/1466456
export function stripEmptyTextNodes(node) {
    var child, next;
    switch (node.nodeType) {
        case 3: // Text node
            if (/^\s*$/.test(node.nodeValue)) {
                node.parentNode.removeChild(node);
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