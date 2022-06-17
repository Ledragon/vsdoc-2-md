export function removeIndent(input: string) {
    let indents = input.match(/^[^\S\n\r]*(?=\S)/gm);

    if (!indents || !indents[0].length)
        return input;

    indents.sort(function (a, b) { return a.length - b.length; });

    if (!indents[0].length)
        return input;

    return input.replace(new RegExp('^' + indents[0], 'gm'), '');
}