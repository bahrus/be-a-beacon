import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
export const emc = {
    base: 'be-a-beacon',
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
