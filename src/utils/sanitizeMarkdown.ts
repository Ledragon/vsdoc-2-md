export function sanitizeMarkdown(value: string) {
    return value.replace(/`/g, '\\`');
}
