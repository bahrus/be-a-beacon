import {BeABeacon} from './be-a-beacon.js';
export {BeABeacon} from './be-a-beacon.js';
import {def} from 'trans-render/lib/def.js';

await BeABeacon.bootUp();

def('be-a-beacon', BeABeacon);