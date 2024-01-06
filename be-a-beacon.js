import { BE, propDefaults, propInfo } from 'be-enhanced/BE.js';
import { XE } from 'xtal-element/XE.js';
export class BeABeacon extends BE {
    static get beConfig() {
        return {
            parse: true,
            primaryProp: 'eventName',
            attachWhenConnected: true,
        };
    }
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
export const tagName = 'be-a-beacon';
const xe = new XE({
    config: {
        tagName,
        propDefaults: {
            ...propDefaults,
            eventName: 'i-am-here',
        },
        propInfo: {
            ...propInfo
        },
        actions: {
            hydrate: 'eventName',
            retire: 'resolved'
        }
    },
    superclass: BeABeacon
});
