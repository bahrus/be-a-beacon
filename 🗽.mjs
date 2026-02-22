// @ts-check
/** @import {MountConfig} from './types/mount-observer/types' */;

import { emc } from './🗽.js';
import {buildCSSQuery} from './node_modules/assign-gingerly/buildCSSQuery.js';

const matching = buildCSSQuery(emc, '');

/**
 * @type {MountConfig}
 */
export const config = {
    matching,
    import: 'be-a-beacon/🗽.js',
    do: 'builtIns.enhanceMountedElement'
};

export function render(){
    return JSON.stringify(config, null, 4);
}