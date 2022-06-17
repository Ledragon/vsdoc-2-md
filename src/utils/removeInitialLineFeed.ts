export function removeInitialLineFeed(input: string) {
    return input.replace(/^(?:\r?\n|\r)/, '');
}