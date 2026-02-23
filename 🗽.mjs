// @ts-check
/** @import {MountConfig} from './types/mount-observer/types' */;

import { emojiEMC } from './emc.js';
import {buildCSSQuery} from './node_modules/assign-gingerly/buildCSSQuery.js';

const matching = buildCSSQuery(emojiEMC);

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