import { Context } from '../Context';
import { process } from './process';

export function processDoc(ctx:Context, docNode: Element) {
    process(ctx, docNode);
}