import {emc as baseEmc} from './emc.mjs';
/** @import {EMC} from './types/mount-observer/types' */;
/** @import {BeABeaconProps} from './types/be-a-beacon/types' */

/**
 * @type {EMC<any, BeABeaconProps> }
 */
const emc = {
    enhConfig: {
        ...baseEmc.enhConfig,
        enhKey: '🗽',
        withAttrs: {
            base: '🗽'
        }
    }
}

export function render(){
    return JSON.stringify(emc, null, 4);
}