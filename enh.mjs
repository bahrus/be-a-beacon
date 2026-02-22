// @ts-check
/** @import {MountConfig} from './node_modules/mount-observer/types' */;

/**
 * @type {MountConfig}
 */
export const config = {
    matching: '[be-a-beacon],[enh-be-a-beacon]',
    mountedElemEmits: {
        event: 'Event',
        args: ['i-am-here']
    }
};

export function render(){
    return JSON.stringify(config, null, 4);
}