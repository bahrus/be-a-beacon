// @ts-check
import { propInfo, rejected, resolved } from 'be-enhanced/cc.js';
import { BE } from 'be-enhanced/BE.js';
import {dispatchEvent as de} from 'trans-render/positractions/dispatchEvent.js';
/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, PAP, AllProps, AP} from './ts-refs/be-a-beacon/types' */;

/**
 * @implements {Actions}
 * 
 */
class BeABeacon extends BE {
    /**
     * @type {BEConfig<AP & BEAllProps, Actions & IEnhancement>}
     */
    static config = {
        propDefaults: {
            eventName: 'i-am-here'
        },
        propInfo: {
            ...propInfo,
        },
        positractions: [resolved, rejected],
        actions: {
            hydrate: {
                ifAllOf: ['eventName']
            },
            retire: {
                ifAllOf: ['resolved']
            }
        }
    };

    de = de;

    /**
     * 
     * @param {AP & BEAllProps} self 
     * @returns 
     */
    hydrate(self) {
        const { enhancedElement, eventName } = self;
        const type = eventName === '#' ? enhancedElement.id : eventName;
        enhancedElement.dispatchEvent(new CustomEvent(type, {
            bubbles: true,
        }));
        return {
            resolved: true,
        };
    }

    /**
     * 
     * @param {AP & BEAllProps} self 
     * @returns 
     */
    retire(self) {
        const { enhancedElement, emc } = 
        /** @type {any} */
        (self);
        enhancedElement.beEnhanced.whenDetached(emc);
    }
}
await BeABeacon.bootUp();
export { BeABeacon };
