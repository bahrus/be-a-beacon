import {BeHive, EnhancementMountCnfg} from 'be-hive/be-hive.js';
import {BeABeacon} from './behance.js';
import {MountObserver, MountObserverScriptElement} from 'mount-observer/MountObserver.js';

const guid = customElements.getName(BeABeacon)!;
const emc: EnhancementMountCnfg = {
    base: guid,
    map: {
        '0.0': 'eventName'
    },
    enhPropKey: 'beABeacon',
    importEnh: async () => {
        const {BeABeacon} = await import('./be-a-beacon.js');
        return BeABeacon;
    }
}

const mose = document.createElement('script') as MountObserverScriptElement<EnhancementMountCnfg>;
mose.id = guid;
mose.synConfig = emc;

MountObserver.synthesize(document, BeHive, mose);



