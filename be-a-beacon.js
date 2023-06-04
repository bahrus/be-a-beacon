import { BE, propDefaults, propInfo } from 'be-enhanced/BE.js';
import { XE } from 'xtal-element/XE.js';
import { register } from 'be-hive/register.js';
export class BeABeacon extends BE {
    async attach(enhancedElement, enhancementInfo) {
        enhancedElement.dispatchEvent(new CustomEvent('i-am-here', {
            bubbles: true,
        }));
        await super.attach(enhancedElement, enhancementInfo);
        this.resolved = true;
    }
}
const tagName = 'be-a-beacon';
const ifWantsToBe = 'a-beacon';
const upgrade = '*';
const xe = new XE({
    config: {
        tagName,
        propDefaults: {
            ...propDefaults
        },
        propInfo: {
            ...propInfo
        },
    },
    superclass: BeABeacon
});
register(ifWantsToBe, upgrade, tagName);
