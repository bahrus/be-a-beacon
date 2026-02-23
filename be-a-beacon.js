//@ts-check
/** @import {EnhancementConfig, SpawnContext} from './types/assign-gingerly/types' */;

/** @import { BeABeaconProps } from './types/be-a-beacon/types' */

/**
 * @type {typeof BeABeacon & {prototype: BeABeaconProps}}
 */
export class BeABeacon {
    /**
     * 
     * @param {Element} enhancedElement 
     * @param {*} ctx 
     * @param {BeABeaconProps} initVals 
     */
    constructor(enhancedElement, ctx, initVals) {
        const {eventName} = initVals;
        let evtName = eventName === '#' ? enhancedElement.id : eventName;
        if(!evtName) evtName = 'i-am-here';
        const event = new Event(evtName, {bubbles: true});
        enhancedElement.dispatchEvent(event);
        const {config} = ctx;
        enhancedElement.enh.dispose(config);
    }
}




