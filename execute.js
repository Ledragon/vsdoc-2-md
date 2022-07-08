const fs = require('fs');
const jsdom = require('jsdom');
const vsdocToMarkdown = require('./dist/vsdocToMarkdown').vsdocToMarkdown;

const path = 'D:\\WideTech\\Development\\Projects\\WideComputationService\\WideComputationService.ConsoleHost\\bin\\Debug\\WideTech.Business.Scripting.xml';
fs.readFile(path, (err, data) => {
    if (err) {
        console.error(err);
    }
    const xmlString = data.toString();
    const dom = new jsdom.JSDOM('');
    // Get DOMParser, same API as in browser
    const DOMParser = dom.window.DOMParser;
    const parser = new DOMParser();
    // Create document by parsing XML
    const document = parser.parseFromString(xmlString, "text/xml");

    console.log(document);
    const md = vsdocToMarkdown(document);
    console.log(md);
});
