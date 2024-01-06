import {register} from 'be-hive/register.js';
import {tagName } from './be-a-beacon.js';
import './be-a-beacon.js';

const ifWantsToBe = 'a-beacon';
const upgrade = '*';

register(ifWantsToBe, upgrade, tagName);