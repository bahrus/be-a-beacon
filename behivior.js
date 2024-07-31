// @ts-check
import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
/** @import {EMC} from './ts-refs/trans-render/be/types.d.ts' */

/**
 * @type {EMC}
 */
export const emc = {
    base: 'be-a-beacon',
    map: {
        '0.0': {
            mapsTo: 'eventName',
            valIfFalsy: 'i-am-here'
        }
    },
    enhPropKey: 'beABeacon',
    importEnh: async () => {
        const { BeABeacon } = 
        /** @type {{new(): IEnhancement<Element>}} */ 
        /** @type {any} */
        (await import('./be-a-beacon.js'));
        return BeABeacon;
    }
};
const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);
