// @ts-check
/** @import {MountConfig} from './types/mount-observer/types' */;

import { canonicalEMC } from './emc.js';
import {buildCSSQuery} from './node_modules/assign-gingerly/buildCSSQuery.js';

const matching = buildCSSQuery(canonicalEMC);

/**
 * @type {MountConfig}
 */
export const config = {
    matching,
    import: 'be-a-beacon/emc.js',
    do: 'builtIns.enhanceMountedElement'
};

export function render(){
    return JSON.stringify(config, null, 4);
}