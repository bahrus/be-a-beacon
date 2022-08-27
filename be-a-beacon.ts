import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeABeaconActions, BeABeaconProps, BeABeaconVirtualProps} from './types';
import { register } from 'be-hive/register.js';

export class BeABeacon extends EventTarget implements BeABeaconActions {
    intro(proxy: Element & BeABeaconVirtualProps, target: Element, beDecorProps: BeDecoratedProps<any, any>): void {
        target.dispatchEvent(new CustomEvent('i-am-here'));
        proxy.resolved = true;
    }
}

export interface BeABeacon extends BeABeaconProps{}

const tagName = 'be-a-beacon';
const ifWantsToBe = 'a-beacon';
const upgrade = 'template';

define<BeABeaconProps & BeDecoratedProps<BeABeaconProps, BeABeaconActions>, BeABeaconActions>({
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