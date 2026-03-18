// @ts-check
/** @import {MountConfig} from '../types/mount-observer/types.js' */;

import { canonicalEMC } from './emc.js';
import {buildCSSQuery} from 'assign-gingerly/buildCSSQuery.js';

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