import { Context } from "./Context";
import { process } from "./process";
import { getTableOfContents } from "./getTableOfContents";
import { stripEmptyTextNodes } from "./stripEmptyTextNodes";

export function vsdocToMarkdown(vsdoc) {
    var parser = new DOMParser();
    var xml = parser.parseFromString(vsdoc, 'text/xml');
    var ctx: Context = {
        markdown: [], // Output will be appended here.
        paramTypes: {}, // Used to map method signature names to types.
        nodeStack: [], // Used to keep track of current position in the node tree.
        types: [], // Table of contents will be generated based on types in assembly.
        indices: {} as any // Keeps track of indices of different document parts to later inject content.
    };

    stripEmptyTextNodes(xml);
    process(ctx, xml);

    // Attach table of contents before members.
    ctx.markdown.splice(ctx.indices.members, 0, getTableOfContents(ctx));
    return ctx.markdown.join('');
};