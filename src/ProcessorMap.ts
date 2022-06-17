import { processAssembly, processDoc } from './processors/';

const ProcessorMap = {
    'doc': processDoc,
    'assembly': processAssembly,
    'members': processMembers,
    'member': processMember,
    'summary': processSummary,
    'value': processValue,
    'typeparam': processTypeparam,
    'remarks': processRemarks,
    'para': processPara,
    'param': processParam,
    'returns': processReturns,
    'example': processExample,
    'permission': processPermission,
    'exception': processException,
    'list': processList,
    'code': processCode,
    'seealso': processSeealso,
    'paramref': processParamref,
    'typeparamref': processTypeparamref,
    'see': processSee,
    'c': processC,
    '#text': processText
};

export default ProcessorMap;