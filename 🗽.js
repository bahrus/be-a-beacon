import {emc as oldEMC} from './emc.js';

const {withAttrs : oldAttrs} = oldEMC;
const withAttrs = {
    ...oldAttrs,
    base: '🗽'
};

/** @type {EnhancementConfig<BeABeaconProps>} */
export const emc = {
    ...oldEMC,
    withAttrs
}