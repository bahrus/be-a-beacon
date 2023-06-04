import {BE, propDefaults, propInfo} from 'be-enhanced/BE.js';
import {XE} from 'xtal-element/XE.js';
import {IBE, EnhancementInfo} from 'be-enhanced/types.js';
import {Actions} from './types';
import {register} from 'be-hive/register.js';

export class BeABeacon extends BE{
    override async attach(enhancedElement: Element, enhancementInfo: EnhancementInfo): Promise<void> {
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

const xe = new XE<IBE, Actions>({
    config: {
        tagName,
        propDefaults:{
            ...propDefaults
        },
        propInfo: {
            ...propInfo
        },
    },
    superclass: BeABeacon
});

register(ifWantsToBe, upgrade, tagName);


