//@ts-check

/** @import {EMC} from './types/mount-observer/types' */;
/** @import {BeABeaconProps} from './types/be-a-beacon/types' */

/**
 * @type {EMC<any, BeABeaconProps> }
 */
export const emc = {
    enhConfig: {
        enhKey: 'BeABeacon',
        spawn: 'be-a-beacon/be-a-beacon.js',
        withAttrs: {
            base: 'be-a-beacon'
        }
    }
}

export function render(){
    return JSON.stringify(emc, null, 4);
}