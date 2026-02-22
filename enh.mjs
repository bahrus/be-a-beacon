// @ts-check
/** @import {MountConfig} from './types/mount-observer/types' */;

/**
 * @type {MountConfig}
 */
export const config = {
    matching: '[be-a-beacon],[enh-be-a-beacon]',
    import: 'be-a-beacon/emc.js',
    do: 'builtIns.enhanceMountedElement'
};

export function render(){
    return JSON.stringify(config, null, 4);
}