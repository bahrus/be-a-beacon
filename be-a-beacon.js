import { config as beCnfg } from 'be-enhanced/config.js';
import { BE } from 'be-enhanced/BE.js';
export class BeABeacon extends BE {
    static config = {
        propDefaults: {
            eventName: 'i-am-here'
        },
        propInfo: {
            ...beCnfg.propInfo,
        },
        positractions: beCnfg.positractions,
        actions: {
            hydrate: {
                ifAllOf: ['eventName']
            },
            retire: {
                ifAllOf: ['resolved']
            }
        }
    };
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
    retire(self) {
        const { enhancedElement } = self;
        enhancedElement.beEnhanced.whenDetached('be-a-beacon');
    }
}
