import { BeHive } from 'be-hive/be-hive.js';
import './behance.js';
import { MountObserver } from 'mount-observer/MountObserver.js';
const emc = {
    base: 'be-a-beacon',
    map: {
        '0.0': 'eventName'
    },
    enhPropKey: 'beABeacon',
    importEnh: async () => {
        const { BeABeacon } = await import('./be-a-beacon.js');
        return BeABeacon;
    }
};
const mose = document.createElement('script');
mose.synConfig = emc;
MountObserver.synthesize(document, BeHive, mose);
