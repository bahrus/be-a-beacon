import {define, BeDecoratedProps} from 'be-decorated/DE.js';
import {Actions, PP, VirtualProps, Proxy} from './types';
import { register } from 'be-hive/register.js';

export class BeABeacon extends EventTarget implements Actions {
    intro(proxy: Proxy, target: HTMLTemplateElement): void {
        target.dispatchEvent(new CustomEvent('i-am-here', {
            bubbles: true,
        }));
        proxy.resolved = true;
    }
}

const tagName = 'be-a-beacon';
const ifWantsToBe = 'a-beacon';
const upgrade = 'template';

define<VirtualProps & BeDecoratedProps<VirtualProps, Actions>, Actions>({
    config:{
        tagName,
        propDefaults:{
            ifWantsToBe,
            noParse: true,
            forceVisible: ['template'],
            upgrade,
            virtualProps: [],
            intro: 'intro',
        },
    },
    complexPropDefaults:{
        controller: BeABeacon
    }
});

register(ifWantsToBe, upgrade, tagName);

