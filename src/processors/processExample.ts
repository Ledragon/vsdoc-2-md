import { Context } from "../Context";
import { removeIndent, removeInitialLineFeed, tabsToSpaces } from "../utils";

export function processExample(ctx: Context, exampleNode) {
    var exampleCode = tabsToSpaces(exampleNode.childNodes[0].nodeValue);
    exampleCode = removeInitialLineFeed(exampleCode);
    exampleCode = removeIndent(exampleCode);

    ctx.markdown.push('\n#### Example\n\n');
    ctx.markdown.push('\n```\n');
    ctx.markdown.push(exampleCode);
    ctx.markdown.push('\n```\n');
    ctx.markdown.push('\n');
}