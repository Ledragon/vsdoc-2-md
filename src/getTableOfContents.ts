import { Context } from './Context';

export function getTableOfContents(ctx: Context) {
    var numTypes = ctx.types.length;
    var numTypesPerRow = 2;
    var numRows = Math.ceil(numTypes / numTypesPerRow);
    var tableOfContents = ['\n<table>\n<tbody>\n'];

    for (var i = 0; i < numRows; i++) {
        tableOfContents.push('<tr>\n');

        for (var j = 0; j < numTypesPerRow; j++) {
            var type = ctx.types[i * numTypesPerRow + j];
            if (type) {
                tableOfContents.push('<td><a href="#');
                tableOfContents.push(type.toLowerCase());
                tableOfContents.push('">');
                tableOfContents.push(type);
                tableOfContents.push('</a></td>\n');
            }
        }

        tableOfContents.push('</tr>\n');
    }

    tableOfContents.push('</tbody>\n</table>\n');
    return tableOfContents.join('');
}