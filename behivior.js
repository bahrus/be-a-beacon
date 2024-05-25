import { BeHive } from 'be-hive/be-hive.js';
import { BeABeacon } from './behance.js';
import { MountObserver } from 'mount-observer/MountObserver.js';
const guid = customElements.getName(BeABeacon);
const emc = {
    base: guid,
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
mose.id = guid;
mose.synConfig = emc;
MountObserver.synthesize(document, BeHive, mose);
