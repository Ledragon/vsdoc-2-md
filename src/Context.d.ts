export interface Context {
    namespace?: string;
    typeName?: string;

    markdown: string[]; // Output will be appended here.
    paramTypes: any; // Used to map method signature names to types.
    nodeStack: any[]; // Used to keep track of current position in the node tree.
    types: any[]; // Table of contents will be generated based on types in assembly.
    indices: {
        members: any;
    }; // Keeps track of indices of different document parts to later inject content.   
    
    previousNode?: string;
    nextNode?: string;
}