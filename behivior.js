import { BeHive, seed } from 'be-hive/be-hive.js';
import { MountObserver } from 'mount-observer/MountObserver.js';
const base = 'be-a-beacon';
export const emc = {
    base,
    map: {
        '0.0': {
            mapsTo: 'eventName',
            valIfFalsy: 'i-am-here'
        }
    },
    enhPropKey: 'beABeacon',
    importEnh: async () => {
        const { BeABeacon } = await import('./behance.js');
        return BeABeacon;
    }
};
const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);
