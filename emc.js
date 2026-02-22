//@ts-check

/** @import {EnhancementConfig} from './types/assign-gingerly/types' */;
/** @import {BeABeaconProps} from './types/be-a-beacon/types' */
import { BeABeacon } from './be-a-beacon.js';

/** @type {EnhancementConfig<BeABeaconProps>} */
export const emc = {
    spawn: BeABeacon,
    withAttrs: {
        base: 'be-a-beacon',
        _base: {
            mapsTo: 'eventName'
        }
    }
};