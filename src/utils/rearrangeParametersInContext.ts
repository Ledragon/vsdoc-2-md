import { Context } from '../Context';
import { findChildNodes } from './findChildNodes';

export function rearrangeParametersInContext(ctx: Context, memberNode) {
    var methodPrototype = memberNode.name;
    var matches = methodPrototype.match(/\((.*)\)/);
    if (!matches) {
        return methodPrototype;
    }

    var paramString = matches[1].replace(' ', '');
    // Params are separated by commas. However, generic type params also use
    // commas as a separator. In order to avoid an invalid split, we must
    // not match commas within braces {}.
    var matchCommasExceptForInBraces = /,(?![^\{]*\})/g;
    var paramTypes = paramString.split(matchCommasExceptForInBraces);
    if (paramTypes.length === 0) {
        return methodPrototype;
    }

    var paramNodes = findChildNodes(memberNode, 'param');
    if (paramNodes.length === 0) {
        return methodPrototype;
    }

    var newParamString = '';
    for (var i = 0; i < paramNodes.length; i++) {
        var paramNode = paramNodes[i];
        var paramName = paramNode.getAttribute('name');
        var paramType = paramTypes[i];
        newParamString += newParamString ? ', ' : '';
        newParamString += paramName;
        ctx.paramTypes[paramName] = paramType;
    }

    var newMethodPrototype = methodPrototype.replace(/\(.*\)/, '(' + newParamString + ')');
    return newMethodPrototype;
}