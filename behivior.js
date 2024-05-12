import { BeHive } from 'be-hive/be-hive.js';
import './behance.js';
BeHive.registry.register({
    base: 'be-a-beacon',
    map: {
        '0.0': 'eventName'
    },
    do: {
        mount: {
            import: async () => {
                const { BeABeacon } = await import('./be-a-beacon.js');
                return BeABeacon;
            }
        }
    }
});
