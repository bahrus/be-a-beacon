import { register } from 'be-hive/register.js';
//import {tagName } from './be-a-beacon.js';
import { BeABeacon } from './be-a-beacon.js';
import { def } from 'trans-render/lib/def.js';
await BeABeacon.bootUp();
def('be-a-beacon', BeABeacon);
const ifWantsToBe = 'a-beacon';
const upgrade = '*';
register(ifWantsToBe, upgrade, 'be-a-beacon');
