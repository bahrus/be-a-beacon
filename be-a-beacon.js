// @ts-check
import { config as beCnfg } from 'be-enhanced/config.js';
import { BE } from 'be-enhanced/BE.js';
/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, PAP, AllProps, AP} from './types.d.ts' */;

/**
 * @implements {Actions}
 * 
 */
class BeABeacon extends BE {
    /**
     * @type {BEConfig<AP & BEAllProps, Actions & IEnhancement, any>}
     */
    static config = {
        propDefaults: {
            eventName: 'i-am-here'
        },
        propInfo: {
            ...beCnfg.propInfo,
        },
        positractions: [...beCnfg.positractions],
        actions: {
            hydrate: {
                ifAllOf: ['eventName']
            },
            retire: {
                ifAllOf: ['resolved']
            }
        }
    };

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
        const { enhancedElement } = 
        /** @type {any} */
        (self);
        enhancedElement.beEnhanced.whenDetached('be-a-beacon');
    }
}
await BeABeacon.bootUp();
export { BeABeacon };
