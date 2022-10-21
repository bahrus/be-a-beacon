import { define } from 'be-decorated/DE.js';
import { register } from 'be-hive/register.js';
export class BeABeacon extends EventTarget {
    intro(proxy, target) {
        target.dispatchEvent(new CustomEvent('i-am-here', {
            bubbles: true,
        }));
        proxy.resolved = true;
    }
}
const tagName = 'be-a-beacon';
const ifWantsToBe = 'a-beacon';
const upgrade = 'template';
define({
    config: {
        tagName,
        propDefaults: {
            ifWantsToBe,
            noParse: true,
            forceVisible: ['template'],
            upgrade,
            virtualProps: [],
            intro: 'intro',
        },
        actions: {}
    },
    complexPropDefaults: {
        controller: BeABeacon
    }
});
register(ifWantsToBe, upgrade, tagName);
