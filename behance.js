import { BeABeacon } from './be-a-beacon.js';
export { BeABeacon } from './be-a-beacon.js';
import { def } from 'trans-render/lib/def.js';
import { emc } from './behivior.js';
BeABeacon['synConfig'] = emc;
await BeABeacon.bootUp();
def('be-a-beacon', BeABeacon);
