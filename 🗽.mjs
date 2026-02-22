import {config as enh} from './enh.mjs';

/**
 * @type {MountConfig}
 */
export const config = {
    ...enh,
    matching: '[🗽]',
};

export function render(){
    return JSON.stringify(config, null, 4);
}