import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {Actions, PP, VirtualProps, Proxy} from './types';
import { register } from 'be-hive/register.js';

export class BeABeacon extends EventTarget implements Actions {
    intro(proxy: Proxy, target: HTMLTemplateElement, beDecorProps: BeDecoratedProps<any, any>): void {
        target.dispatchEvent(new CustomEvent('i-am-here'));
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
            forceVisible: ['template'],
            upgrade,
            virtualProps: [],
            intro: 'intro',
        },
        actions:{}
    },
    complexPropDefaults:{
        controller: BeABeacon
    }
});

register(ifWantsToBe, upgrade, tagName);