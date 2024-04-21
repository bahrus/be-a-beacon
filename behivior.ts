//import {register} from 'be-hive/register.js';
//import {tagName } from './be-a-beacon.js';
import {BeABeacon} from './be-a-beacon.js';
import {def} from 'trans-render/lib/def.js';
import {BeHive} from 'be-hive/be-hive.js'

await BeABeacon.bootUp();

def('be-a-beacon', BeABeacon);

BeHive.registry.register({
    base: 'be-a-beacon',
    do:{
        mount:{
            import: async () => {
                const {BeABeacon} = await import('./be-a-beacon.js');
                return BeABeacon;
            }
        }
    }
});

