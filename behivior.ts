import {BeHive} from 'be-hive/be-hive.js';
import './behance.js';
import {EnhancementMountCnfg} from 'trans-render/be/types';
import {MountObserverScriptElement} from 'mount-observer/types';
import {MountObserver} from 'mount-observer/MountObserver.js';

const emc: EnhancementMountCnfg = {
    base: 'be-a-beacon',
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
mose.type = 'mountobserver';
mose.synConfig = emc;

MountObserver.synthesize(document, BeHive, mose);



