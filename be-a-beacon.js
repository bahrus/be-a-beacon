import { define } from 'be-decorated/be-decorated.js';
import { register } from 'be-hive/register.js';
export class BeABeacon extends EventTarget {
    intro(proxy, target, beDecorProps) {
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
