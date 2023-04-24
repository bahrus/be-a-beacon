import {BE, propDefaults, propInfo} from './be-enhanced/BE.js';
import {IBE} from './be-enhanced/types.js';
import {XE} from './xtal-element/XE.js';
import {PP, Actions} from './types.js';
import {register} from './be-hive/register.js';

export class BeABeacon2 extends BE{
    override async attach(enhancedElement: Element, enhancement: string): Promise<void> {
        enhancedElement.dispatchEvent(new CustomEvent('i-am-here', {
            bubbles: true,
        }));
        await super.attach(enhancedElement, enhancement);
        console.log(this.resolved);
        this.resolved = true;
    }
}

const tagName = 'be-a-beacon';
const ifWantsToBe = 'a-beacon';
const upgrade = 'template';

const xe = new XE<IBE, Actions>({
    config: {
        tagName,
        propDefaults:{
            ...propDefaults
        },
        propInfo: {
            ...propInfo
        },
        //actions:{}
    },
    superclass: BeABeacon2
});

register(ifWantsToBe, upgrade, tagName);


