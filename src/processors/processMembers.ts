import { sanitizeMarkdown } from '../utils';
import { process } from '../process';

export function processMembers(ctx, membersNode) {
    ctx.indices.members = ctx.markdown.length;

    // 1. Extract type and name from members.
    let childElements:any[] = [];
    for (var i = 0; i < membersNode.childNodes.length; i++) {
        let childNode = membersNode.childNodes[i];
        if (childNode.nodeType === Node.ELEMENT_NODE) {
            var childName = childNode.getAttribute('name');
            childNode.type = childName.substring(0, 1);
            childNode.name = sanitizeMarkdown(childName.substring(2));
            childElements.push(childNode);
        }
    }

    // 2. Sort members by their name.
    childElements.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });

    // 3. Append sorted nodes back to their parent.
    for (let i = 0; i < childElements.length; i++) {
        membersNode.appendChild(childElements[i]);
    }

    process(ctx, membersNode);
}