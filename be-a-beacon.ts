import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeABeaconActions, BeABeaconProps, BeABeaconVirtualProps} from './types';
import { register } from 'be-hive/register.js';

export class BeABeacon implements BeABeaconActions{

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
            upgrade,
            virtualProps: [],

        },
        actions:{

        }
    },
    complexPropDefaults:{
        controller: BeABeacon
    }
});

register(ifWantsToBe, upgrade, tagName);