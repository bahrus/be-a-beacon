import { BE, propDefaults, propInfo } from './be-enhanced/BE.js';
import { XE } from './xtal-element/XE.js';
import { register } from './be-hive/register.js';
export class BeABeacon2 extends BE {
    async attach(enhancedElement, enhancement) {
        enhancedElement.dispatchEvent(new CustomEvent('i-am-here', {
            bubbles: true,
        }));
        await super.attach(enhancedElement, enhancement);
        console.log('resolving');
        this.resolved = true;
    }
}
const tagName = 'be-a-beacon';
const ifWantsToBe = 'a-beacon';
const upgrade = 'template';
const xe = new XE({
    config: {
        tagName,
        propDefaults: {
            ...propDefaults
        },
        propInfo: {
            ...propInfo
        }
    },
    superclass: BeABeacon2
});
register(ifWantsToBe, upgrade, tagName);
