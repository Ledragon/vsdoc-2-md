/**
 * Parses an xml file to a Document. Only works in a browser.
 * @param fileName The XML content to parse.
 * @returns The parsed document.
 */
export function parse(xmlContent: string): Document {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlContent, 'text/xml');
    return xml;
}