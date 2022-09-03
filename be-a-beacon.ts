import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeABeaconActions, BABP, BeABeaconVirtualProps, Proxy} from './types';
import { register } from 'be-hive/register.js';

export class BeABeacon extends EventTarget implements BeABeaconActions {
    intro(proxy: Proxy, target: HTMLTemplateElement, beDecorProps: BeDecoratedProps<any, any>): void {
        target.dispatchEvent(new CustomEvent('i-am-here'));
        proxy.resolved = true;
    }
}

const tagName = 'be-a-beacon';
const ifWantsToBe = 'a-beacon';
const upgrade = 'template';

define<BeABeaconVirtualProps & BeDecoratedProps<BeABeaconVirtualProps, BeABeaconActions>, BeABeaconActions>({
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