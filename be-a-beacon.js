import { BE, propDefaults, propInfo } from 'be-enhanced/BE.js';
import { XE } from 'xtal-element/XE.js';
import { register } from 'be-hive/register.js';
export class BeABeacon extends BE {
    hydrate(self) {
        const { enhancedElement, eventName } = self;
        const type = eventName === '*' ? enhancedElement.id : eventName;
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
const tagName = 'be-a-beacon';
const ifWantsToBe = 'a-beacon';
const upgrade = '*';
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
register(ifWantsToBe, upgrade, tagName);
