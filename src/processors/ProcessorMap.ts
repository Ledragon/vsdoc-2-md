import { Context } from '../Context';
import { processAssembly } from './processAssembly';
import { processC } from './processC';
import { processCode } from './processCode';
import { processDoc } from './processDoc';
import { processExample } from './processExample';
import { processException } from './processException';
import { processList } from './processList';
import { processMember } from './processMember';
import { processMembers } from './processMembers';
import { processPara } from './processPara';
import { processParam } from './processParam';
import { processParamref } from './processParamref';
import { processPermission } from './processPermission';
import { processRemarks } from './processRemarks';
import { processReturns } from './processReturns';
import { processSee } from './processSee';
import { processSeealso } from './processSeeAlso';
import { processSummary } from './processSummary';
import { processText } from './processText';
import { processTypeparam } from './processTypeparam';
import { processTypeparamref } from './processTypeparamref';
import { processValue } from './processValue';

const ProcessorMap: { [key: string]: (ctx: Context, node: Element) => void } = {
    '#text': processText,
    'assembly': processAssembly,
    'c': processC,
    'code': processCode,
    'doc': processDoc,
    'example': processExample,
    'exception': processException,
    'list': processList,
    'member': processMember,
    'members': processMembers,
    'para': processPara,
    'param': processParam,
    'paramref': processParamref,
    'permission': processPermission,
    'remarks': processRemarks,
    'returns': processReturns,
    'see': processSee,
    'seealso': processSeealso,
    'summary': processSummary,
    'typeparam': processTypeparam,
    'typeparamref': processTypeparamref,
    'value': processValue,
};

export default ProcessorMap;