//@ts-check

/** @import {AttrPatterns, EnhancementConfig} from '../types/assign-gingerly/types.js' */;
/** @import {BeABeaconProps} from '../types/be-a-beacon/types.js' */
import { BeABeacon } from '../be-a-beacon.js';

const spawn = /** @type {any} */ (BeABeacon);

/** @type {AttrPatterns<BeABeaconProps>} */
export const canonicalWithAttrs = {
    base: 'be-a-beacon',
    _base: {
        mapsTo: 'eventName'
    }
}

export const emojiWithAttrs = {
    ...canonicalWithAttrs,
    base: '🗽',
};

/** @type {EnhancementConfig<BeABeaconProps, Element>} */
export const canonicalEMC = {
    spawn,
    enhKey: 'beABeacon',
    withAttrs: canonicalWithAttrs
};

/** @type {EnhancementConfig<BeABeaconProps, Element>} */ 
export const emojiEMC = {
    spawn,
    enhKey: '🗽',
    withAttrs: emojiWithAttrs,
}