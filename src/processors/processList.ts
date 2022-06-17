export function processList(ctx, listNode) {
    var type = listNode.getAttribute('type');
    var newline = (ctx.nodeStack[ctx.nodeStack.length - 2] === 'param') ? '<br>' : '\n';
    if (type) {
        ctx.markdown.push(newline);
        if (type === 'table') {
            var listheaderElement = findChildNode(listNode, 'listheader');
            var listheaderTermElements = findChildNodes(listheaderElement, 'term')
            ctx.markdown.push('| ');
            for (var i = 0; i < listheaderTermElements.length; i++) {
                ctx.markdown.push(listheaderTermElements[i].textContent);
                ctx.markdown.push(' | ');
            }
            ctx.markdown.push(newline);

            itemElements = findChildNodes(listNode, 'item');
            for (var i = 0; i < itemElements.length; i++) {
                var itemTermElements = findChildNodes(itemElements[i], 'term');
                ctx.markdown.push('| ');
                for (var j = 0; j < itemTermElements.length; j++) {
                    process(ctx, itemTermElements[j])
                    ctx.markdown.push(' | ');
                }
                ctx.markdown.push(newline);
            }
        } else {
            var prefixFn;
            if (type === 'number') {
                var counter = 1;
                prefixFn = function() { return counter++ + '. '; };
            } else { // Bullet.
                prefixFn = function() { return '- '; };
            }
            var itemElements = findChildNodes(listNode, 'item');
            for (var i = 0; i < itemElements.length; i++) {
                var itemElement = itemElements[i];
                ctx.markdown.push(prefixFn());
                var termElement = findChildNode(itemElement, 'term');
                if (termElement) {
                    process(ctx, termElement);
                    ctx.markdown.push(' - ');
                }
                var descriptionElement = findChildNode(itemElement, 'description');
                if (descriptionElement) {
                    process(ctx, descriptionElement);
                }
                ctx.markdown.push(newline);
            }
        }
    }
}