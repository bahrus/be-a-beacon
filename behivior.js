import { BeHive } from 'be-hive/be-hive.js';
import { MountObserver } from 'mount-observer/MountObserver.js';
const base = 'be-a-beacon';
const emc = {
    base,
    map: {
        '0.0': 'eventName'
    },
    enhPropKey: 'beABeacon',
    importEnh: async () => {
        const { BeABeacon } = await import('./behance.js');
        return BeABeacon;
    }
};
const mose = document.createElement('script');
mose.id = base;
mose.synConfig = emc;
MountObserver.synthesize(document, BeHive, mose);
